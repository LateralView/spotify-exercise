# spotify-exercise
## A Frontend developer exercise

This exercise is made to test your abilities to solve a typical frontend issue.

### Context

Basically, you'll need to connect our current backend to be able to do album searchs and show the current comments, allowing the user to put a comment on a album.
The application should be fully responsive, as target from iphone 5 to desktop (1080p).

### Technical Rules

This should be done following the [Toddmotto Styleguide](https://github.com/toddmotto/angular-styleguide), and at least 80% of code coverage by unit test.

The technology used on the frontend side should be:
* Javascript ES6+.
* A+ Promise Syntax (the q library is allowed).
* Angular 1.5.X (Component Based Flavor)
* Gulp as Task Runner.
* Webpack, Babel and Babel-Polyfill to parse the ES6 Code.
* SASS as CSS Preprocessor.
* Mocha, Karma, Chai and Sinnon for Unit-Testing.

### How to run (With Docker, Recommended)
1. Install [Docker](https://www.docker.com/) in your computer.
2. Run `docker-compose up` and open your browser pointing to `http://localhost:3000`

### How to run (Directly on your machine)
1. Install [Mongodb](https://www.mongodb.com/) on your machine, run in with the command `mongod`.
2. Install [Node.js](https://nodejs.org/) and run `npm install` on the project folder.
3. Run `npm install -g gulp` and `gulp build` on the root project folder to generate the backend documentation.
4. Go to the *Public/* folder and run `gulp build` to generate the basic frontend build.
5. On the core project folder, just run `npm start` to start the application open your browser pointing to `http://localhost:3000`.

### Backend documentation
When you run the application, you can open the documentation hitting the `/docs` endpoint, also, if you want to see more about the response of the search you will need to review the [Spotify API](https://developer.spotify.com/web-api/search-item/).

### Gulp tasks (frontend)
* `gulp frontend:watch`: Minify styles and generate build on every change, useful for development purposes.

* `gulp frontend:build`: Minify styles and generate a build, useful on Demo/Prod.

### Gulp tasks (backend)
* `gulp test`: Run Mocha tests for the backend, create coverage inside `coverage/backend` folder.

* `gulp doc`: Create Backend APIDOC documentation inside `/doc` folder, it is available under `/docs` endpoint.

* `gulp backend:build`: Shorthand for `gulp doc`.

### Gulp Build
* `gulp build`: Shorthand that will run backend and frontend build tasks at the same time.

### How to test
1. Install karma-cli with: `npm install -g karma-cli`.
2. Hit `karma start` on the project root.
3. You will see the console and browser running the test suite, also, the coverage will be generated under `coverage/frontend` folder

### Designs
Ask @negan1911 or @nicogelpi to share you the permissions of the designs, [Zeplin](https://zeplin.io/) is required.
