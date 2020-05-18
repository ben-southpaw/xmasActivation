const path = require('path');
const rollup = require('rollup');
const terser = require('rollup-plugin-terser').terser;
const babel = require('rollup-plugin-babel');

module.exports = async function build(distPath) {
    var isProduction = process.env.NODE_ENV == 'production';

    var configPath = path.resolve(__dirname, '../../eslintrc.json');
    const inputOptions = {
        input: 'static/js/main.js',
    };
    const bundle = await rollup.rollup(inputOptions);

    //todo add vesion?
    distPath = path.resolve(distPath, 'js/');

    await bundle.write({
        format: 'esm',
        dir: path.resolve(distPath, 'bundle'),
        plugins: [
            terser({
                sourcemap: !isProduction,
            }),
        ],
    });

};
