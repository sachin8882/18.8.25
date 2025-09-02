const express = require('express');
const path = require('path');
const connect = require('./connection'); // ye connection se inport ki ha
const user = require('./routes/user');
const student = require('./routes/student');  //ye file routes se import ki ha
const makeAdmin = require('./makeadmin');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true})); //ye data ko lene ke liye ha 
app.use(user);
app.use(student);

connect(); // is par database connect ho raha ha 
makeAdmin();

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views")); //join ki jagha resolve bhi rakh sakte ha .

app.listen("3000", ()=>{
    console.log("server is running on port 3000");
})