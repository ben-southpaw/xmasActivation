#!/bin/bash

set -e

zip -r deploy.zip __sapper__ package.json static .npmrc tools