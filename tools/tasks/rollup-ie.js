const commonjs = require('rollup-plugin-commonjs');
const path = require('path');
const rollup = require('rollup');
const terser = require('rollup-plugin-terser').terser;
const babel = require('rollup-plugin-babel');

//======================= IE non-module ===========================
module.exports = async function build(distPath, dev) {
    var isProduction = process.env.NODE_ENV == 'production';

    const inputOptions = {
        input: 'static/js/main.js',
        plugins: [
            babel({
                runtimeHelpers : true,
                exclude: ['node_modules/**', 'src/**'],
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            targets: {
                                browsers: "> 0.5%, ie >= 11"
                            },
                            modules: false,
                            spec: true,
                            useBuiltIns: "usage",
                            forceAllTransforms: true,
                            corejs: {
                                version: 3,
                                proposals: false
                            }
                        }
                    ]
                ]
            })
        ],
    };
    const bundle = await rollup.rollup(inputOptions);

    //todo add vesion?
    distPath = path.resolve(distPath, 'js/');

    var plugins = [];
    if(isProduction)
        plugins.push(terser({
            sourcemap: false,
        }));

    await bundle.write({
        format: 'iife',
        dir: path.resolve(distPath, 'bundle_ie'),
        plugins: plugins
    });
};
