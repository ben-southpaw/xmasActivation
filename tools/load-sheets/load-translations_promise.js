//see https://developers.google.com/sheets/api/quickstart/nodejs for reference

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { google } = require('googleapis');
const R = require('ramda');

module.exports = function(destPath) {
    const SPREADSHEETS = [
        {
            SPREADSHEET_ID: '1mE_NmwNoyK_as3ENNQo5KGvZQppz2bIELOzF8fs49SA',
            sheetName: 'collections',
        },
    ];
    const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const TOKEN_PATH = 'token.json';

    const mapLanguageToLocale = language =>
        ({
            ['fr-fr']: 'fr',
            ['it-it']: 'it',
            ['en-us']: 'en',
            ['ru-ru']: 'ru',
            ['pl-pl']: 'pl',
            ['es-es']: 'es',
            ['de-de']: 'de',
            ['nl-nl']: 'nl',
        }[language.toLowerCase()] || false);

    const writeTranslations = async (packedTranslations, filename) => {
        // console.log(packedTranslations)
        return new Promise((resolve, reject) => {
            const directory = path.resolve(process.cwd(), 'static/data');
            fs.writeFile(
                `${directory}/${filename}`,
                JSON.stringify(packedTranslations),
                { flag: 'w' },
                res => {
                    if (res) console.log(res);

                    resolve();
                },
            );
        });
    };

    const packTranslations = (name, sheet) => {
        const KEY_INDEX = 1;

        // console.log(sheet)
        const languages = sheet.splice(0, 7).pop(); // Remove first 7 rows, grab last row for translations
        // console.log(sheet, languages)
        const locales = languages.map((l, languageIndex) => {
            const locale = mapLanguageToLocale(l);
            if (!locale) {
                return false;
            }
            const translations = sheet.map(translation => {
                const translationKey = translation[KEY_INDEX];
                const translatedText = translation
                    .filter((t, rowIndex) => rowIndex === languageIndex)
                    .pop();

                return {
                    [translationKey]: translatedText,
                };
            });

            return {
                [locale]: translations.length
                    ? translations.reduce((accumulator, currentValue) => ({
                          ...accumulator,
                          ...currentValue,
                      }))
                    : false,
            };
        });
        // Sanitise empty or invalid results.
        const sanitisedLocales = locales.filter(locale => locale !== false);
        const anyNonLetterCharacter = /[^A-z]/g;
        return {
            name: name.replace(anyNonLetterCharacter, '').toLowerCase(),
            locales: sanitisedLocales.length
                ? sanitisedLocales.reduce((acc, v) => ({
                      ...acc,
                      ...v,
                  }))
                : {},
        };
    };

    /**
     * Create an OAuth2 client with the given credentials, and then execute the
     * given callback function.
     * @param {Object} credentials The authorization client credentials.
     * @param {function} callback The callback to call with the authorized client.
     */
    function authorize(credentials, callback) {
        const { client_secret, client_id, redirect_uris } = credentials.installed;
        const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

        // Check if we have previously stored a token.
        fs.readFile(TOKEN_PATH, (err, token) => {
            if (err) return getNewToken(oAuth2Client, callback);
            oAuth2Client.setCredentials(JSON.parse(token));
            callback(oAuth2Client);
        });
    }

    /**
     * Get and store new token after prompting for user authorization, and then
     * execute the given callback with the authorized OAuth2 client.
     * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
     * @param {getEventsCallback} callback The callback for the authorized client.
     */
    function getNewToken(oAuth2Client, callback) {
        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: SCOPES,
        });
        console.log('Authorize this app by visiting this url:', authUrl);
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question('Enter the code from that page here: ', code => {
            rl.close();
            oAuth2Client.getToken(code, (err, token) => {
                if (err) return console.error('Error while trying to retrieve access token', err);
                oAuth2Client.setCredentials(token);
                // Store the token to disk for later program executions
                fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
                    if (err) return console.error(err);
                    console.log('Token stored to', TOKEN_PATH);
                });
                callback(oAuth2Client);
            });
        });
    }

    async function getPack(sheets, SPREADSHEET_ID, sheetName, idx) {
        try {
            const { data } = await sheets.spreadsheets.get({
                spreadsheetId: SPREADSHEET_ID,
            });
            //console.log(SPREADSHEET_ID)

            const sheetNames = data.sheets.map(({ properties }) => properties.title);
            const packedTranslations = await Promise.all(
                sheetNames.map(
                    async (title, index) =>
                        await new Promise((resolve, reject) => {
                            sheets.spreadsheets.values.get(
                                {
                                    spreadsheetId: SPREADSHEET_ID,
                                    range: `${title}!A:BZ`,
                                },
                                (err, res) => {
                                    if (err) {
                                        reject(null);
                                        return;
                                    }
                                    const { values } = res.data;
                                    resolve(packTranslations(title, values));
                                },
                            );
                        }),
                ),
            );

            var promises = [];
            packedTranslations.forEach(({ name, locales }) => {
                if (locales.length === 0) return;
                promises.push(writeTranslations(locales, `${sheetName}-${name}.json`));
            });

            await Promise.all(promises);

            return {
                sheetName,
                translations: packedTranslations,
            };
            /*return {
                sheetName,
                translations: packedTranslations
            }*/
        } catch (error) {
            console.log(
                'error? Renew credentials: https://developers.google.com/sheets/api/quickstart/go?authuser=1',
                error,
            );

            return {
                sheetName,
                translations: [],
            };
        }
    }

    async function getPacks(auth) {
        const sheets = google.sheets({ version: 'v4', auth });
        const packs = SPREADSHEETS.map(({ SPREADSHEET_ID, sheetName }, idx) => {
            return getPack(sheets, SPREADSHEET_ID, sheetName, idx);
        });

        // console.log('Error: ' + response.result.error.message)
        const combinedPacks = await Promise.all(packs);

        return combinedPacks;
    }

    /**
     * Prints the names and majors of students in a sample spreadsheet:
     * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
     * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
     */
    async function listMajors(auth) {
        return new Promise(async (resolve, reject) => {
            const combinedPacks = await getPacks(auth);
            //const combinedPacks = await Promise.all(packs)
            let flattenedCombinedPacks = {};
            combinedPacks.forEach(({ sheetName, translations }) => {
                flattenedCombinedPacks[sheetName] = R.reduce(
                    (acc, val) => {
                        return {
                            ...acc,
                            [val.name]: val.locales,
                        };
                    },
                    [],
                    translations,
                );
            });
            await writeTranslations(flattenedCombinedPacks, `combined.json`);
        });
    }

    return new Promise((resolve, reject) => {
        // The file token.json stores the user's access and refresh tokens, and is
        // created automatically when the authorization flow completes for the first
        // time.

        var credentialsPath = path.resolve(__dirname, './config/credentials.json');

        fs.readFile(credentialsPath, (err, content) => {
            if (err) {
                console.log('Error loading client secret file:', err);
                reject();
            } else {
                // Authorize a client with credentials, then call the Google Sheets API.
                authorize(JSON.parse(content), async () => {
                    await listMajors();
                    console.log('load-translations complete!');
                    resolve();
                });
            }
        });
    });
};
