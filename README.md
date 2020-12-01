**ADVCLB Template**

**Step 1 : Initial Project Setup** <br>

`npx degit "sveltejs/sapper-template#rollup" MyTestApp` ​<br>
`cd MyTestApp` <br>
 
​**Step 2 : Initiailize git​**

`git init` <br>
`git add .` <br>
`git commit -a -m "init"` <br>
  
**Step 3 : Merge Scaffold​**

`git remote add origin https://github.com/advclb/advclb_sapper_scaffold` <br>
 
`git pull origin master --allow-unrelated-histories` <br>
 
 _Merge any necessary updates into project_ <br>
 
 **Step 4 : Change repo to new project​**

`git remote set-url origin your.git.repo.example.com:user/repository2.git` <br>
`git push --set-upstream origin master` <br>
 
**Step 5: Running the Project**
 
You can install dependencies and run the project in development mode with:

`cd my-app npm install` <br>
 & <br>
`npm run dev` <br>

Open up localhost:3000 and start clicking around.

Consult https://sapper.svelte.dev for help getting started.

**Dependencies** <br>

Google Sheets: <br>
Our content is hosted in google sheets, this task will pull the data and load into json (static/data/locales)

`npm run load-sheets` <br>

Sheets URL : (google sheets link here)

Localization WIP To test different languages locally, add the url para 'lang' (ex : localhost:3000/nautical?lang=fr)

**Exporting the Project**
 
npx allows you to use locally-installed dependencies <br>
`npm run export` <br>
This will create a sapper/export folder with a production-ready build of your site. You can launch it like so:

`npx serve sapper/export` <br>
Navigate to localhost:3000 (or whatever port serve picked), and verify that your site works as expected.

**How it works/extra notes** <br>

When you run sapper export, Sapper first builds a production version of your app, as though you had run sapper build, and copies the contents of your static folder to the destination. It then starts the server, and navigates to the root of your app. From there, it follows any elements it finds, and captures any data served by the app.

Because of this, any pages you want to be included in the exported site must either be reachable by
elements or added to the --entry option of the sapper export command. Additionally, any non-page routes should be requested in preload, not in onMount or elsewhere.
Working with Assets In order to serve assets from different paths or CDNs, configure the .env file with the intended base href.

BASE_URL='/tommy-icons'

Debugging Pro tip! Install Svelte Dev Tools for Chrome :

https://chrome.google.com/webstore/detail/svelte-devtools/ckolcbmkjpjmangdbmnkpjigpkddpogn <br>

**Sapper** <br>

Structure Sapper expects to find two directories in the root of your project — src and static.

src The src directory contains the entry points for your app — client.js, server.js and (optionally) a service-worker.js — along with a template.html file and a routes directory.

src/routes This is the heart of your Sapper app. There are two kinds of routes — pages, and server routes.

Pages are Svelte components written in .svelte files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.)

Server routes are modules written in .js files, that export functions corresponding to HTTP methods. Each function receives Express request and response objects as arguments, plus a next function. This is useful for creating a JSON API, for example.

There are three simple rules for naming the files that define your routes:

A file called src/routes/about.svelte corresponds to the /about route. A file called src/routes/blog/[slug].svelte corresponds to the /blog/:slug route, in which case params.slug is available to the route The file src/routes/index.svelte (or src/routes/index.js) corresponds to the root of your app. src/routes/about/index.svelte is treated the same as src/routes/about.svelte. Files and directories with a leading underscore do not create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called src/routes/_helpers/datetime.js and it would not create a /_helpers/datetime route static The static directory contains any static assets that should be available. These are served using sirv.

In your service-worker.js file, you can import these as files from the generated manifest...

import { files } from '@sapper/service-worker'; ...so that you can cache them (though you can choose not to, for example if you don't want to cache very large files).

Bundler config Sapper uses Rollup or webpack to provide code-splitting and dynamic imports, as well as compiling your Svelte components. With webpack, it also provides hot module reloading. As long as you don't do anything daft, you can edit the configuration files to add whatever plugins you'd like.

**Production mode and deployment** <br> 
To start a production version of your app, 
`run npm run build && npm start`
 This will disable live reloading, and activate the appropriate bundler plugins.

You can deploy your application to any environment that supports Node 8 or above. As an example, to deploy to Now, run these commands:

npm install -g now now Using external components When using Svelte components installed from npm, such as @sveltejs/svelte-virtual-list, Svelte needs the original component source (rather than any precompiled JavaScript that ships with the component). This allows the component to be rendered server-side, and also keeps your client-side app smaller.

Because of that, it's essential that the bundler doesn't treat the package as an external dependency. You can either modify the external option under server in rollup.config.js or the externals option in webpack.config.js, or simply install the package to devDependencies rather than dependencies, which will cause it to get bundled (and therefore compiled) with your app:

npm install -D @sveltejs/svelte-virtual-list Sketch-kit See : https://www.npmjs.com/package/sketch-kit