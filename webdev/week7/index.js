require('dotenv').config();
const bcrypt = require("bcrypt");
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { parse } = require('dotenv');
const JWT_SECRET = process.env.JWT_SECRET;
mongoose.connect(process.env.DB_URL);

const app = express();

app.use(express.json());

app.post("/signup", async function(req, res) {

    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(30),
        password: z.string().min(3).max(30)
    })

    const parsedDatawithSucess = requiredBody.safeParse(req.body); // stores the error too
    if(!parsedDatawithSucess.success){
        res.json({
            message: "Incorrect format",
            error: parsedDatawithSucess.error // specify which error

        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    try {
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);


        await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name
    });
        
    } catch (error) {
        console.log("Error putting data in the db");
        
    }
    
    res.json({
        message: "You are signed up"
    })
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email
    });

    if(!response){
        res.status(401),json({
            message: "User does not exits"
        })
        return;
    }

    const passwordMatch = await bcrypt.compare(password, response.password);
     if (passwordMatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});


app.post("/todo", async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);