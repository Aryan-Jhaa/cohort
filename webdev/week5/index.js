const express = require('express');

const app = express();

app.get("/sum", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a+b
    })
} )

app.get("/multiply/:a/:b", function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a*b
    })
} )

app.listen(3000); 