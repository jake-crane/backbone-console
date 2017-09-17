This is a MVP POC project to replace the configuration console.

run "npm install" to download dependencies.

run "npm start" to build and start the http server.

CI results can be found [here](https://travis-ci.org/jake-crane/mvp-console).

Things this does better than the old console:
* Users can search for a configuration.
    * Ctrl-F can use used to get focus of the search.
    * The search can match any part of a configuration.
* Everything is faster.
* The entire page doesn't re-load for each change.
* Configurations can be deleted.
