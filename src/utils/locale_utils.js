import {
    compose,
    head,
    filter,
    includes,
    toLower,
    toUpper,
    split,
    pathOr,
    view,
    lensIndex,
    defaultTo,
} from 'ramda';
import {
    markets,
    defaultMarket,
    defaultProject,
    defaultLanguage,
} from '../../static/data/markets.js';

const availableLocaleParams = ['nl', 'fr', 'en', 'it', 'de', 'es', 'pl', 'ru'];
const getMarketCode = hostName => head(split('.', hostName));
const getLocaleParam = compose(
    head,
    filter(fragment => fragment && includes(fragment.toLowerCase(), availableLocaleParams)),
    split('/'),
);

const getMarketLocale = ({ markets, defaultMarket = 'uk' }) => market => {
    return markets[market] ? markets[market] : markets[defaultMarket];
};

export const getHostName = req => {
    if (process.env.NODE_ENV == 'development') return getLocaleParam(req.path) || 'en';
    else return req.headers['x-forwarded-host'] || req.headers['host'] || window.location.hostname;
};

export const getPathName = req => (!process.browser ? req.path : window.location.pathname);

export const getMarket = req => {
    const hostName = getHostName(req);
    const marketParam = hostName ? getMarketCode(hostName) : 'uk';
    return markets[marketParam] ? marketParam : defaultMarket;
};

export const getLanguage = req => {
    const hostName = getHostName(req);
    let marketParam = hostName ? getMarketCode(hostName) : 'en';

    if (availableLocaleParams.indexOf(marketParam) === -1) {
        marketParam = 'en';
    }

    return marketParam;
};

export const getSiteLocaleISO = req => {
    const locale = getSiteLocale(req);
    const map = {
        de: 'de_DE',
        fr: 'fr_FR',
        it: 'it_IT',
        en: 'en_GB',
        es: 'es_ES',
        nl: 'nl_NL',
        pl: 'pl_PL',
        ru: 'ru_RU',
    };
    return pathOr('en_GB', [locale.toLowerCase()], map);
};

const getLocaleFromPath = compose(
    toUpper,
    defaultTo(''),
    view(lensIndex(1)),
    split('/'),
);

export const getOptionalSiteLocale = req => {
    const pathName = getPathName(req);
    const language = getLocaleFromPath(pathName);
    return language.length === 2 ? `/${language}` : '';
};

export const getSiteLocale = req => {
    const hostName = getHostName(req);
    const pathName = getPathName(req);
    const marketParam = getMarketCode(hostName);
    const marketLocale = getMarketLocale({ markets, defaultMarket })(marketParam);
    const localeParam = getLocaleParam(pathName);

    // console.log('hostname', hostName)
    // console.log('pathName', pathName)
    // console.log('marketParam', marketParam)
    // console.log('marketLocale', marketLocale)
    // console.log('localeParam', localeParam)

    return localeParam ? toLower(localeParam) : marketLocale;
};

export const getCurrentProject = req =>
    compose(
        pathOr(defaultProject, ['project']),
        head,
        pathOr([], ['route', 'meta']),
    )(req);
