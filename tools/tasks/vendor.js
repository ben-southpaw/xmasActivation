const copyNodeModules = require('copy-node-modules');
const fs = require('fs-extra');
const path = require('path');

/**
 * Copies node_module dependencies into public folder
 * @param destPath
 * @returns {Promise<unknown>}
 */
module.exports = function(destPath) {
    return new Promise(resolve => {
        //check if deps exist..
        var packagePath = path.resolve(process.cwd(), 'package.json');
        var pkg = fs.readFileSync(packagePath);
        if (pkg) {
            pkg = JSON.parse(pkg);

            if (!pkg.dependencies) {
                resolve();
                return;
            }
        }

        //remove previous
        var srcNodeModulesPath = process.cwd();
        var destNodeModulesPath = path.resolve(destPath, 'js/');

        var nodePath = path.resolve(destNodeModulesPath, 'node_modules/');
        fs.remove(nodePath, () => {
            copyNodeModules(
                srcNodeModulesPath,
                destNodeModulesPath,
                { devDependencies: false },
                function(err, results) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    /*for (var i in results) {
                    console.log('package name:' + results[i].name + ' version:' + results[i].version);
                }*/
                    console.log('vendor             :: complete');

                    resolve();
                },
            );
        });
    });
};
