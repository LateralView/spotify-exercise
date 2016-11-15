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
