const express = require("express");

const app = express();
app.use(express.json());

const users = [];

function generateToken(){
    return Math.random();
}
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
    const token = generateToken();
    userFound.token = token;
    res.json({
        token: token
    })
}
    else{
        res.status(403).send("Invalid username or password");
    }
    
console.log(users);
});

app.listen(3000);