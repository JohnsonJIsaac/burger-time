// Dependencies
// =============================================================

// Requiring our Todo model
const db = require("../models");

// Routes
// =============================================================
const apiRoutes = function(app) {

    app.get("/", function(req, res) {
        // let data = "<h1>This is Data</h1>"
        // let data = 3267189478921
        res.render("index")
        // res.render("index", {key: data})

        
        // db.Burgers.findAll({}).then(function(dbBurgers) {
            // res.json(dbBurgers);
        // });
    });

  // GET route for getting all of the posts
  app.get("/api/burgers", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Burgers.findAll({}).then(function(dbBurgers) {
      // We have access to the Burgers as an argument inside of the callback function
      res.json(dbBurgers);
    });
  });

  // POST route for saving a new post
  app.post("/api/burgers", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json

  
    db.Burgers.create({
      burgerName: req.body.burgerName,
      devoured: req.body.devoured,
    }).then(function(dbPost) {
      res.json(dbPost);
    })
  });

  // POST route for saving a new post
  app.put("/api/burgers/:burger", function(req, res) {
    console.log(req.params.burger)
    db.Burgers.update(
      {devoured: req.body.devoured},
      {where:
        {burgerName: req.params.burger}
    }).then(function(dbPost) {
      res.json(dbPost);
    })
  });

 };
module.exports = apiRoutes;