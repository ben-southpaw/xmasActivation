const path = require('path');
const fs = require('fs');
const loadTranslations = require('./load-translations.js');
const PackMaps = require('./pack-utils.js');

const directory = path.resolve(process.cwd(), 'static/data/locales');

//todo don't write products twice!
return loadTranslations('1RjWYB1YdOi-d056Hxnic1M8Fth3ZFbZ-jhIlATf3MRs', directory,
    {
        'copy': PackMaps['PackTranslations'],
        'stores': PackMaps['PackStores']
    });
