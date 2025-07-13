// Import express
const express = require("express");

// Create an instance of express
const app = express();

// Define route handlers
app.get('/', function(req, res){
    res.send("Hello World")
});
