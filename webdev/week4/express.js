// Import express
const express = require("express");

// Create an instance of express
const app = express();

// Define route handlers
app.get('/', function(req, res){
    res.send("Hello Week 4");
});

app.get('/hello', function(req, res){
    res.send("Hello Week 4 from hello endpoint");
});

app.post('/', function(req, res){
    res.send("Hello Week 4 from POST request");
});

// Specify PORT
app.listen(3000);