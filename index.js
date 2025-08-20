const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');
const connect = require('./connection'); // ye connection se inport ki ha
const user = require('./routes/user');
const student = require('./routes/student')  //ye file routes se import ki ha 
app.use(express.urlencoded({ extended: false})); //ye data ko lene ke liye ha 
connect(); // is par database connect ho raha ha 
app.use(user);
app.use(student);
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views")); //join ki jagha resolve bhi rakh sakte ha .

app.listen("3000", ()=>{
    console.log("server is running on port 3000");
})