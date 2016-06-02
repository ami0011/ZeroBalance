Welcome to Finix -  The WebApp!
===================
####**Installation Guidelines**

**Prerequisites**
Tool need to be installed on your machine - 

 - Download and install [git](https://git-scm.com/) .
 - Download and install [nodejs](https://nodejs.org).

	
	**Note**: Make sure you have **Node version >= 4.0** and **NPM >= 3**

**Install npm packages:** 	

 - Webpack  `npm install -g webpack`
 - Webpack-dev-server    `npm install -g webpack-dev-server`
 - Typings    `npm install -g typings`
 - Typescript   `npm install -g typescript`


----------


**Now Clone the repository and install project dependencies -** 

    Create a new directory then open command prompt and set path to the working directory then - 
Run the following command to clone repository

    git clone https://github.com/ami0011/finixDemo.git
Once cloning is done then go to the inner folder
		

    cd finixDemo
then run the following command

	npm install
After successful installation of all dependencies it’s time to run our application.
	Hit `npm start`  then goto [http://locathost:3000](http:loclhost:3000) in your browser.
	
To run the local copy in production mode and build the sources, execute:

    npm run prebuild:prod && npm run build:prod && npm run server:prod

This will clear up your dist folder (where release files are located), generate release build and start built-in server. Now you can copy the sources from a dist folder and use it with any backend framework or simply put it under some web server.


----------
####**Project Structure:** 
The directory structure of this template is as follows:

    finixDemo/
       ├──config/                    * build configuration
       │   ├──helpers.js             * helper functions for  our configuration files
       │   ├──webpack.dev.js         * development webpack config
       │   ├──webpack.prod.js        * production webpack config
       │   └──webpack.test.js        * testing webpack config
       │
       ├──src/                       * source files that will be compiled to javascript
       │   ├──main.browser.ts        * entry file for our browser environment
       │   │
       │   ├──index.html             * application layout
       │   │
       │   ├──polyfills.ts           * polyfills file
       │   │
       │   ├──vendor.ts              * vendors file
       │   │
       │   ├──custom-typings.d.ts    * custom typings for third-party modules
       │   │
       │   ├──platform/              * platform dependent imports
       │   │
       │   ├──app/                   * application code - our working directory
       │   │   │
       │   │   ├──app.component.ts   * main application component
       │   │   │
       │   │   ├──app.loader.ts      * requires initial css styles (most important for application loading stage)
       │   │   │
       │   │   ├──app.menu.ts        * sidebar menu configuration
       │   │   │
       │   │   ├──app.state.ts       * global application state for data exchange between components
       │   │   │
       │   │   ├──app.scss           * application styles 
       │   │   │
       │   │   ├──pages/             * application pages components, place where you can create pages and fill them with components
       │   │   │
       │   │   └──theme/             * template global components/directives/pipes and styles
       │   │
       │   └──assets/                * static assets are served here
       │
       │
       ├──tslint.json                * typescript lint config
       ├──typedoc.json               * typescript documentation generator
       ├──tsconfig.json              * config that webpack uses for typescript
       ├──typings.json               * our typings manager
       ├──package.json               * what npm uses to manage it's dependencies
       ├──bower.json                 * DEPRECATED - moving to npm as primary package manager for all dependenties
       └──.bowerrc                   * DEPRECARD - temporary bower configuration
