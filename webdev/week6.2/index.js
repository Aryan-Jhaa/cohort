const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "secret";

const app = express();
app.use(express.json());

const users = [];

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    users.push(
        {username: username,
        password: password}
    )

    res.json({
        message: "You're signed up!"
    })
    console.log(users);
})

app.post("/signin", function(req, res){

    const username = req.body.username;
    const password = req.body.password;

    let userFound = null;
    for(let i =0; i<users.length; i++){
        if(users[i].username == username && users[i].password == password){
            userFound = users[i];
        }
    }

if(userFound){
    const token = jwt.sign({
        username: username
    }, JWT_SECRET);     //convert username to a token

    res.json({
        token: token
    })
}
    else{
        res.status(403).send("Invalid username or password");
    }
    
console.log(users);
});

// creating an authenticated endpoint: 
app.get("/me", function(req, res){
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_SECRET);
    const username = decoded.username;

    let foundUser = null;

    for(let i=0; i<users.length; i++){
        if(users[i].username == username){
            foundUser = users[i];
        }
    }

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password

        })
    }
    else{
        res.json({
            message: "invalid token"
        })
    }
})
    
app.listen(3000);