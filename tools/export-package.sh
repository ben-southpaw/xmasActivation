#!/bin/bash

node tools/build_dev.js

SAPPER_EXPORT=true sapper export --legacy

set -e

zip -r export.zip src static .env package.json rollup.config.js README.md tools/build_dev.js tools/tasks eslintrc.json __sapper__/export

node <<EOF

var fs = require("fs");
var pkgJSON = require("./package.json");

fs.rename("export.zip", pkgJSON.name + "-v" + pkgJSON.version + ".zip", err =>{
  if(err)
    console.log(err)
});


EOF

