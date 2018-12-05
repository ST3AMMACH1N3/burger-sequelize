const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

const db = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controller");

app.use(routes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Listening");
  });
});