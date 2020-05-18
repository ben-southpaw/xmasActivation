const fs = require('fs');
const path = require('path');
const axios = require('axios');
const R = require('ramda');

const markets = {
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

module.exports = function(combined) {

    //all codes and ids
    const codes = Object.keys(combined.en_GB);

    //only combi codes
    const combiCodes = Object.keys(combined.en_GB).filter(code => code.substring(0,2) == 'WW');
    const directory = path.resolve(process.cwd(), 'static/data/products');

    const endpoint = (market ) =>
        `https://tommy-campaign-api-production.herokuapp.com/api/${market}/products/multiple/${combiCodes}`;

    var products = {};

    const promises = Object.entries(markets).map(([market, language]) => {
        return new Promise(resolve => {
            const url = endpoint(market);

            return axios.get(url).then(result => {
                const data = result.data;
                products[market] = data;
                resolve();
            });
        });
    });

    Promise.all(promises).then(() => {
        var result = {};
        for(var key in combined){
            var market = key.substring(3).toLowerCase();
            var productData = products[market] || products['uk'];
            result[key] = codes.map(code =>{
                return productData.find(data => data.id == code) || { id : code, url : combined[key][code]};
            })
            //combined[key] = productData;
        }
        return fs.writeFile(path.resolve(directory, `products.json`), JSON.stringify(result), function(error) {
            //if (!error) resolve();
            if (error)
                console.error(error.message);
        });

    });

    return Promise.all(promises);
};