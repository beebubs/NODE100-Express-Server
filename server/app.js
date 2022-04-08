// import files and packages up here
const data = require("../server/data.json")
const express = require("express");
const morgan = require("morgan");

// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan("dev"));

app.get("/", function(req, res) {
    res.status(200).send("status 200");
    
});

app.get("/data", function(req, res) {
    res.json(data)
});

// finally export the express application
module.exports = app;
