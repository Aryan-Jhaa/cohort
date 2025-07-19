const express = require("express");

const app = express();

let totalRequests = 0;
function requestCounter(res, req, next){
    totalRequests++;
    console.log("Total requests: " + totalRequests);
    next();
}

function finalSumHandler(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
}

function finalMultiplyHandler(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a * b
    })
}

app.get("/sum", requestCounter, finalSumHandler);

// app.use(requestCounter); this will apply to all routes

app.get("/multiply", requestCounter, finalMultiplyHandler);

app.get("/admin", function totalReqs(res, req){
    res.json({
        message: "Total number of requests: " + totalRequests
    })    
})


app.listen(3000);