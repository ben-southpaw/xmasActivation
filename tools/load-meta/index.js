const loadMeta = require('./load-meta.js');
const path = require('path');
const fs = require('fs');

const directory = path.resolve(process.cwd(), 'static/data/meta');

loadMeta().then(results => {

    //save to json files
    for (var token in results) {
        var filePath = path.resolve(directory, token + `.json`);
        fs.writeFile(filePath, JSON.stringify(results[token]), function (error) {
            //if (!error) resolve();
            if (error)
                console.error(error.message);
        });

    }
});