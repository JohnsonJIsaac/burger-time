// Dependencies
// =============================================================

// Requiring our Todo model
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Burgers.findAll({}).then(function(dbBurgers) {
            res.json(dbBurgers);
        });
    });

  // GET route for getting all of the posts
  app.get("/api/burgers", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Burger.findAll({}).then(function(dbBurger) {
      // We have access to the Burgers as an argument inside of the callback function
      res.json(dbBurger);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.Post.findAll({
      where: {
        id: req.params.category
      }
    }).then(function(dbPost) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbPost);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.Post.findALL({
      where: {
        title: req.params.id
      }
    }).then(function(dbPosts) {
      res.json(Posts);
    });
  });

  // POST route for saving a new post
  app.post("/api/burgers", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json

    // console.log("hskajdhsakldjkdlajdlaks", req.body);
    db.Burgers.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
    }).then(function(dbPost) {
      res.json(dbPost);
    })
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id, 
    // then return the result to the user using res.json
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
  });
};