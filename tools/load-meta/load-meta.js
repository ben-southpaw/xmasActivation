const axios = require('axios');

const markets = {
    // Note these are also used in basket!
    at: 'de',
    be: 'nl',
    hr: 'en',
    cz: 'en',
    dk: 'en',
    ee: 'en',
    fi: 'en',
    fr: 'fr',
    de: 'de',
    hu: 'en',
    ie: 'en',
    it: 'it',
    lv: 'en',
    lt: 'en',
    lu: 'fr',
    nl: 'nl',
    pl: 'pl',
    pt: 'en',
    ru: 'ru',
    sk: 'en',
    si: 'en',
    es: 'es',
    se: 'en',
    ch: 'de',
    uk: 'en',
};
const defaultMarket = 'uk';
const defaultLanguage = 'en_GB';
    // const defaultProject = 'sports';
    // const availableLocaleParams = ['nl', 'fr', 'en', 'it'];

var state = {
    cookieNotice: {},
    findAStore: {},
    nav: [],
    top: [],
    middle: [],
    bottom: [],
    socialMedia: {},
    copyrightNotice: {},
    paymentMethods: {},
    market: defaultMarket,
    language: defaultLanguage,
    baseUrl: '',
};

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

function setMetaData({header, footer, cookieNotice, market, language}) {
    var obj = Object.assign({}, state);
    obj.market = market;
    obj.language = language;
    obj.cookieNotice = cookieNotice;
    obj.findAStore = header.findAStore;
    obj.nav = header.nav;
    obj.top = footer.top;
    obj.middle = footer.middle;
    obj.bottom = footer.bottom;
    obj.socialMedia = footer.socialMedia;
    obj.copyrightNotice = footer.copyrightNotice;
    obj.paymentMethods = footer.paymentMethods;
    return obj;
}


module.exports = async function () {

    return new Promise(resolve => {

        var results = {};
        var promises = [];

        Object.keys(marketMap).forEach(market =>{
        //for (var market in marketMap) {
            var locales = marketMap[market].locales;

            promises = promises.concat(locales.map(async locale => {

                var language = locale.substr(0, 2);
                try {

                    const metaData = await loadMarketMeta(market, language);
                    const token = market + '-' + language;
                    results[token] = metaData;

                }catch(e){
                    console.warn(e.messsage);
                }

            }));
        });

        Promise.all(promises).then(()=>{
            resolve(results);
        });
    });
}

async function loadMarketMeta(market, language) {

    const siteApiUrl = ``;
    let params = {};

    // Add language to payload if it is not the markets default language.
    const isMarketDefaultLanguage = markets[market] && markets[market] == language;

    if (!isMarketDefaultLanguage) {
        params = {
            language: language.toLowerCase(),
        };
    }
    try {
        const response = await axios.get(siteApiUrl, {
            params,
        });

        return setMetaData({
            ...response.data,
            market,
            language,
        });

    } catch (error) {
        /* console.log(
            'Reaktor has raised an error trying to fetch the meta',
            error
        )*/
        const response = await axios.get(siteApiUrl);

        return setMetaData({
            ...response.data,
            market,
            language,
        });

    }



}