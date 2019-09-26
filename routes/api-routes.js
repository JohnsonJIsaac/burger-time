// Requiring our Todo model
var db = require("../models");

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
  app.post("/api/", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Burger.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbBurger) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbBurger);
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
