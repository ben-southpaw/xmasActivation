const path = require('path');
const ejs = require('ejs');
const fs = require('fs');
const render = require('koa-ejs');

/**
 * Used for rendering page (development) and to our server...
 * @param destPath
 * @param app
 * @returns {Promise<unknown>}
 */
module.exports = function(destPath, data) {
    //build html
    return new Promise((resolve, reject) => {
        /*  var pathTranslations = path.resolve(process.cwd(), 'assets/data/locales/combined.json');

          var translations = fs.readFileSync(pathTranslations);
          translations = JSON.parse(translations);

          var manifestPath = path.resolve(process.cwd(), 'assets/data/preload-manifest.json');

          //todo this could be more elegant
          var manifest = JSON.parse(fs.readFileSync(manifestPath));
          translations.files = manifest.files;
  */

        var htmlPath = path.resolve(process.cwd(), 'assets/html/index.ejs');

        ejs.renderFile(htmlPath, data, { rmWhitespace: true }, (err, str) => {
            if (err) {
                reject(err);
            } else {
                var destHtmlPath = path.resolve(destPath, 'index.html');
                fs.writeFileSync(destHtmlPath, str);
                console.log('render             :: complete');
                resolve();
            }
        });
    });
};
