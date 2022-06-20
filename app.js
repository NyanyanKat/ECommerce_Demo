const express = require("express");
const app = express();
const path = require("path");

const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

require('dotenv').config();

const routes = require("./router");

app.use(express.json());

app.use(
    session({
        name: "SESSIONID",
        secret: process.env.SESSION_KEY,
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 1000 * 60 * 60 * 24},
        genid: function(req) {
            return uuidv4();
        },
    })
);

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(routes);

app.use(express.static(path.join(__dirname, "/public"), {extensions: ['html']}));

app.set("view engine", "hbs");

module.exports = app;