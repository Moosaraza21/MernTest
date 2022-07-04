const express=require("express");
const mongoose=require("mongoose");
const app=express();
const dotnev=require('dotenv');
const cors = require('cors')
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
dotnev.config({path: './config.env'});




require('./db/Conn')
app.use(express.json());
app.use(require('./Router/Auth.js'));
require('./passport');
app.use(cors());
const PORT=process.env.PORT;
app.use(cookieParser())
app.use(bodyParser.urlencoded({ 
    extended: false
}));


app.listen(PORT,()=>{
    console.log("Server is running at port ",`${PORT}`);
})