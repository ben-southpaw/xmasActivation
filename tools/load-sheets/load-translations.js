//see https://developers.google.com/sheets/api/quickstart/nodejs for reference

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const mkdirp = require('mkdirp');
const {google} = require('googleapis');
const R = require('ramda');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_PATH = 'token.json';


var translations;

const writeTranslations = async (destPath, packedTranslations, filename) => {
    // console.log(packedTranslations)
    translations = packedTranslations;

    return new Promise((resolve, reject) => {
        //todo move path to package.json

        //console.log('load-translations  :: file : ' + filename)
        fs.writeFile(
            `${destPath}/${filename}`,
            JSON.stringify(packedTranslations),
            {flag: 'w'},
            res => {
                if (res) reject(res);
                else resolve();
                //            res && console.log(res)
            },
        );
    });
};

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
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

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
async function listMajors(auth, SPREADSHEET_ID, destPath, packMaps) {
    const sheets = google.sheets({version: 'v4', auth});
    // const packs = SPREADSHEETS.map(async ({ SPREADSHEET_ID, sheetName }, idx) => {
    try {
        const {data} = await sheets.spreadsheets.get({
            spreadsheetId: SPREADSHEET_ID,
        });

        const sheetNames = data.sheets.map(({properties}) => properties.title);

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
                                const {values} = res.data;

                                if (values && packMaps[title]) {
                                    resolve(packMaps[title](title, values));
                                } else {
                                    resolve('No Values Found for Sheet: ' + title);
                                }
                            },
                        );
                    }),
            ),
        );

        var arr = [];
        packedTranslations.map(async ({name, locales}) => {
           // if (locales.length !== 0)
                arr.push(writeTranslations(destPath, locales, `${name}.json`));
        });

        await Promise.all(arr);

        return packedTranslations;

    } catch (error) {
        console.log(
            'error? Renew credentials: https://developers.google.com/sheets/api/quickstart/go?authuser=1',
            error,
        );
    }

}

module.exports = function (sheetID, destPath, packMaps) {
    // The file token.json stores the user's access and refresh tokens, and is
    // created automatically when the authorization flow completes for the first
    // time.
    return new Promise((resolve, reject) => {
        var credentialsPath = path.resolve(__dirname, './config/credentials.json');
        fs.readFile(credentialsPath, async (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
            // Authorize a client with credentials, then call the Google Sheets API.
            authorize(JSON.parse(content), async auth => {
                var combined = await listMajors(auth, sheetID, destPath, packMaps);
                console.log('load-translations  :: complete ');
                resolve(combined);
            });
        });
    });
};
