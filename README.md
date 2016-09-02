Dependencies:
=============

-   Install Nodejs runtime
    (https://nodejs.org/en/ https://github.com/nodejs/node)
-   grunt-cli karma and bower, required by ngbp (Angular kickstarter
    included in current project http://ngbp.github.io/ngbp): sudo npm -g
    install grunt-cli karma bower
-   grunt (http://gruntjs.com), required by grunt-cli: sudo npm install
    grunt -g (local install raises grunt issues).

Download the code:
==================

-   git clone https://github.com/euasier/ngbp-first-app
-   cd ngbp-first-app

Install local dependencies:
===========================

-   npm install
-   bower install

Step 0: Hello Angular
=====================

Download the code: git checkout -f step-0

Build and run web app:

-   grunt build
-   npm start
-   Visit the main page: http://localhost:8000

Step 1: List patients
=====================

-   Download the code: git checkout -f step-1
-   Build and run the web app, visit the main page

Step 2: Edit patient
====================

-   Download the code: git checkout -f step-2
-   Build and run the web app, visit the main page

Step 3: Add new patient
=======================

-   Download the code: git checkout -f step-3
-   Build and run the web app, visit the main page

At the moment, this is a CRUD angular sample app and the data is managed
locally.\

Step 4: Manage data inside a server side database
=================================================

-   In order to interact with the server side database we will write our
    own http server in Express.
    -   Install MongoDB NoSql database: https://www.mongodb.com/
    -   Uninstall http-server: npm uninstall http-server -S
    -   Install Express: npm install express -S
    -   Install body-parser module for HTTP POST requests: npm install
        body-parser -S
    -   Install Nodejs MongoDB NoSql database driver: npm install
        mongodb -S
-   Download the code: git checkout -f step-4
-   Start MongoDB database: mongod
-   Create the database executing createDatabase.sh
-   Build and run the web app, visit the main page

Data generated with: https://www.mockaroo.com/
