// Requiring our Todo model
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
      //let key= <h1>data yo</h1>
    // findAll returns all entries for a table when used with no options
   // db.Todo.findAll({}).then(function(dbTodo) {
      // We have access to the todos as an argument inside of the callback function
      res.render("index");
    //});
  });

  // POST route for saving a new todo
  // app.post("/api/burgers", function(req, res) {
  //     console.log("\n\nNONOONONNOO\n\n")
  //   // Add sequelize code for creating a post using req.body,
  //   // then return the result using res.json
  //   // console.log("hskajdhsakldjkdlajdlaks", req.body);
  //   db.Burger.create({
  //     burgerName: req.body.burgerName,
  //     devoured: req.body.devoured,
  //   }).then(function(dbPost) {
  //       console.log("\n\nYEAH SO WE GET TO THIS POINT???\n\n");
  //     res.json(dbPost);
  //   })
  // });

  app.get("/api/post", function(req, res) {
    console.log("\n\nNONOONONNOO\n\n")
    db.Burgers.findAll({    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });


  app.post("/api/post", function(req, res) {
    console.log("\n\nNONOONONNOO\n\n");
    db.Burgers.create({
      burgerName: req.body.burgerName,
      devoured: req.body.devoured
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {

  });

  // PUT route for updating todos. We can get the updated todo from req.body
  app.put("/api/todos", function(req, res) {

  });
};
