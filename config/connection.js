// Set up MySQL connection.
const mysql = require("mysql");
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/burger_db`
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
