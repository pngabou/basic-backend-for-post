const express = require('express');
const app = express();

//dotenv
require("dotenv").config({path:"./.env"});

//cb connect
require("./config/database");

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/",require("./routes/post.route"))

//server
app.listen(process.env.PORT,() =>{console.log(`server listening on port ${process.env.PORT}`)})