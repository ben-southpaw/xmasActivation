### Exporting

#### Production

to create a new build and stuff...

```
npm version patch
```
This will update the version (in package.json) and tag the build
```
sh tools/export-package.sh
```
This creates the exported static sapper build and zip the package appending the version
```
git push origin [tag w/ version]
```
And, this will push the build to master and initiate the production build