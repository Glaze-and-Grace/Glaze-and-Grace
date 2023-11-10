const jwt = require('jsonwebtoken');
require('dotenv').config();

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());


async function authorize(req, res, next){
    try{
        console.log("in")
        // const token = localStorage.getItem('token');
        const token = req.cookies.token;
        // const t = req.cookie.token;
        console.log(token);
        // console.log(t);
        if (!token){
            res.status(401).json("you need to login first");
        }else {
            const user = jwt.verify(token, process.env.SECRET_KEY);
            if (!user.id){
                res.status(401).json("unauthorized");
                console.log("not");
            }
            req.user = user;
            next();
        }
    }catch(error){
        res.status(400).json(error);
    }
};

module.exports = {
    authorize
};