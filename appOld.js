/**
 * Module dependencies.
 */
const express = require("express");
const bodyParser = require("body-parser");
const errorHandler = require("errorhandler");
/**
 * Controllers (route handlers).
 */
const homeController = require("./controllers/routes/home");
const errorController = require("./controllers/routes/errors");
/**
 * Server configuration (session, static, ...)
 */
const app = express();
app.set("port", 8080);
app.use('/static', express.static(__dirname + '/../src/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', "./src/views");
/**
 * App routes.
 */
app.get("/", homeController.index);
app.get("/suggestions/:searchString", homeController.getSuggestions);

/**
 * ERRORS
 */
app.use(errorController.error404);

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d"), app.get("port"));
    console.log("  Press CTRL-C to stop\n");
});
module.exports = app;
//# sourceMappingURL=appOld.js.map