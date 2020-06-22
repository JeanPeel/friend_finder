
var express = require("express");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 8080;

// var apiRoutes = require("./app/routing/apiRoutes")
// var MainApi = apiRoutes.Main;
// var BestApi = apiRoutes.Best;

// const bodyParser = require('body-parser'); 

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './app/public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./app/routing/apiRoutes")(app.bestData);
// -------this worked before i named my app it linked to function(app)
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// require("./app/routing/apiRoutes")(data);



app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});