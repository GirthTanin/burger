var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.static("public"));
// parse application /x-www-form-urlencoded...
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

 app.use(routes);

// This will start my server.
app.listen(PORT, function() {
    // this logs so that I know I'm not crazy...
    console.log("Server listening on: http://localhost:" + PORT);
});