const express = require("express");
const override = require("method-override");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const routes = require("./controllers/burger_controllers.js");


var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false}));

app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function(){
  console.log("Listening at port: " + PORT);
});
