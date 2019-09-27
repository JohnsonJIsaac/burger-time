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

    // console.log("hskajdhsakldjkdlajdlaks", req.body);
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

  // // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   // Add sequelize code to delete a post where the id is equal to req.params.id, 
  //   // then return the result to the user using res.json
  // });

//   // PUT route for updating posts
//   app.put("/api/posts", function(req, res) {
//     // Add code here to update a post using the values in req.body, where the id is equal to
//     // req.body.id and return the result to the user using res.json
//   });
 };
module.exports = apiRoutes;