const override = require("method-override");
const express = require("express");
const bodyParser = require("body-parser");


var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false}));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controllers.js");

app.use("/", routes);

app.listen(PORT, function(){
  console.log("Listening at port: " + PORT);
});
