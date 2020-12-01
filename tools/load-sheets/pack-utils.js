const marketMap = {
    at: {store: 'TommyAT', locales: ['de_DE']},
    be: {store: 'TommyBE', locales: ['nl_NL', 'fr_FR']},
    ch: {store: 'TommyCH', locales: ['de_DE', 'it_IT', 'fr_FR']},
    cz: {store: 'TommyCZ', locales: ['en_GB']},
    de: {store: 'TommyDE', locales: ['de_DE']},
    dk: {store: 'TommyDK', locales: ['en_GB']},
    ee: {store: 'TommyEE', locales: ['en_GB']},
    es: {store: 'TommyES', locales: ['es_ES']},
    fi: {store: 'TommyFI', locales: ['en_GB']},
    fr: {store: 'TommyFR', locales: ['fr_FR']},
    hr: {store: 'TommyHR', locales: ['en_GB']},
    hu: {store: 'TommyHU', locales: ['en_GB']},
    ie: {store: 'TommyIE', locales: ['en_GB']},
    it: {store: 'TommyIT', locales: ['it_IT']},
    lt: {store: 'TommyLT', locales: ['en_GB']},
    lu: {store: 'TommyLU', locales: ['fr_FR', 'de_DE']},
    lv: {store: 'TommyLV', locales: ['en_GB']},
    nl: {store: 'TommyNL', locales: ['nl_NL']},
    pl: {store: 'TommyPL', locales: ['pl_PL']},
    pt: {store: 'TommyPT', locales: ['en_GB']},
    ro: {store: 'TommyRO', locales: ['en_GB']},
    ru: {store: 'TommyRU', locales: ['ru_RU', 'en_GB']},
    se: {store: 'TommySE', locales: ['en_GB']},
    si: {store: 'TommySI', locales: ['en_GB']},
    sk: {store: 'TommySK', locales: ['en_GB']},
    uk: {store: 'TommyUK', locales: ['en_GB']},
};

const Utils = {

    MapLanguageToLocale : language =>
        ({
            ['fr-fr']: 'fr',
            ['it-it']: 'it',
            ['en-us']: 'en',
            ['ru-ru']: 'ru',
            ['pl-pl']: 'pl',
            ['es-es']: 'es',
            ['de-de']: 'de',
            ['nl-nl']: 'nl',
        }[language.toLowerCase()] || false),

    'PackTranslations': (name, sheet) => {
        const KEY_INDEX = 1;

        // console.log(sheet)
        const languages = sheet.splice(0, 7).pop(); // Remove first 7 rows, grab last row for translations
        // console.log(sheet, languages)
        const locales = languages.map((l, languageIndex) => {
            const locale = Utils.MapLanguageToLocale(l);
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
            name: name.replace(anyNonLetterCharacter, '-').toLowerCase(),
            locales: sanitisedLocales.length
                ? sanitisedLocales.reduce((acc, v) => ({
                    ...acc,
                    ...v,
                }))
                : {},
        };
    },

    'PackStores': (name, sheet) => {

        const ID_INDEX = 0;
        const TYPE_INDEX = 1;
        const COUNTRY_INDEX = 2;
        const CITY_INDEX = 3;
        const STREET_INDEX = 4;
        const STREET_NUM_INDEX = 5;
        const POSTAL_CODE_INDEX = 6;

        const data = {};
        //sheet.splice(0, 2);
        sheet.forEach(row => {

            if (row[ID_INDEX] && row[COUNTRY_INDEX] && row[CITY_INDEX]) {

                var id = row[ID_INDEX];
                var locale = row[COUNTRY_INDEX];
                var url = row[CITY_INDEX];
                var urls = data[locale] || {};
                urls[id] = url;
                data[id] = {
                    'type': row[TYPE_INDEX],
                    'country': row[COUNTRY_INDEX],
                    'city': row[CITY_INDEX],
                    'street': row[STREET_INDEX],
                    'num': row[STREET_NUM_INDEX],
                    'postalCode': row[POSTAL_CODE_INDEX]
                };

            }
        });
        return {
            name: 'stores',
            locales: data,
        };
    },

    'PackProducts': (name, sheet) => {
        const ID_INDEX = 0;
        const LOCALE_INDEX = 1;
        const URL_INDEX = 3;
        const locales = {};
        //sheet.splice(0, 2);
        sheet.forEach(row => {
            if (row[ID_INDEX] && row[LOCALE_INDEX] && row[URL_INDEX]) {
                var id = row[ID_INDEX];
                var locale = row[LOCALE_INDEX];
                var url = row[URL_INDEX];
                var urls = locales[locale] || {};
                urls[id] = url;
                locales[locale] = urls;
            }
        });
        return {
            name: 'products',
            locales: locales,
        };
    }

};

module.exports = Utils;