**What is Svelte?** 

It is a component framework that compiles JS, html, css from single
.svelte files. Svelte runs during the build of your app, as opposed to the browser based React, Vue, etc. With Svelte there
is no virtual DOM, Native JS directly updates the DOM, 
which helps performance significantly. It also helps to reduce boilerplate code.

**What is Sapper?** 

Its stands for Svelte-APP-makER. :(
Sapper is Svelte's lightweight equivalent of next.js, the server-side renderer for static files/API calls/routing etc.

Every Sapper project has three entry points along with a src/template.html file:

src/client.js
src/server.js
src/service-worker.js (this one is optional)

Sapper require 3 steps: The server must serve the contents of the /static folder.
                        Your server framework must support middlewares, it must use sapper.middleware() imported from @sapper/server.
                        Your server must listen on process.env.PORT. 
   
template.html
This is the main entry point for your app, where all our components, style refs, and scripts
 are injected as required.
 
 **Routing with Sapper**
 Routing with Sapper uses either page routes or server routes.
 a URL ending with /about renders a svelte file name about.svelte
 if it is located in src/routes. Meaning that routes are created with the organisation
 of our project. If we need more complex routing we can use [slug].svelte
 to handle urls with additional content.
 Additionally, if we want a route to be ignored by this method, prefixing '_' will achieve this.
 
 The basic sapper set-up is as follows:
 
 ├ package.json
 ├ src
 │ ├ routes
 │ │ ├ # your routes here
 │ │ ├ _error.svelte
 │ │ └ index.svelte
 │ ├ client.js
 │ ├ server.js
 │ ├ service-worker.js
 │ └ template.html
 ├ static
 │ ├ # your files here
 └ rollup.config.js / webpack.config.js
 