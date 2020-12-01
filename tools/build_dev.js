const path = require('path');
const fs = require('fs');

const rollup = require('./tasks/rollup.js');
const destPath = path.resolve(process.cwd(), 'static');
rollup(destPath);

const rollupIE = require('./tasks/rollup-ie.js');
rollupIE(destPath);

var args = process.argv.slice(2);

var timeOut;

console.log(args);

if (args.includes('--watch')) {
    const srcPath = path.resolve(process.cwd(), 'static/js');

    fs.watch(srcPath, { recursive: true }, (evt, path) => {
        var run = (path.includes('main.js') || !timeOut);
        if (!path.includes('main.js') && !timeOut) {
            timeOut = setTimeout(() => {
                rollupIE(destPath, true);
                timeOut = null;
            }, 1000);
        }
    });
}
