// Adding auth middleware


const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "secret123"

const app = express();
app.use(express.json());
 
const users = [];

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })
    res.json({
        message: "You are signed in"
    })
})

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for(let i=0; i<users.length; i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i];
        }
    }
    if(!foundUser){
        res.json({
            message: "Invalid username or password"
        })
    } else {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token: token
        })
    }
})

function auth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData){
        req.username = decodedData.username;
        next()
    } else{
        res.json({
            message: "You are not logged in"
        })
    }

}

app.get("/me", auth, function(req, res){

    for(let i = 0; i < users.length; i++){
        if(users[i].username === req.username){
            foundUser = users[i];
        }
        res.json({
            username:  foundUser.username,
            password: foundUser.password
            })  
        }
    })


app.listen(3000);