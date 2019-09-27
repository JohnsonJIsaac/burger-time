// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080 ;

// Requiring our models for syncing
console.log("\nI might be the first one????:           server.js\n");
const db = require("./models");
console.log("\nOH SHIT!!!!, i didn't expect that this came this far down on the stack:           server.js\n");

// Sets up the Express app to handle data parsing
console.log("\nWhat about me then??:           server.js\n");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log("\nWhat about me then??:           server.js\n");


// Static directory
app.use(express.static("public"));
console.log("\nHow about this guy???:           server.js\n");

// Express Handle bars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  console.log("\nHOPEFULLY I UNDERSTAND THE STACK EVEN MORE:           server.js");
  console.log("THIS happens in the promise portion:           server.js\n");
  console.log("so you need to check the models folder for what LOWERCASE sequelize means\n\n");
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
