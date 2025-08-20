const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//  http://localhost:3000
router.get("/",(req,res)=>{
    res.render('loginpanel'); // home ek file ka namm ha jo views folder mai ha 
})
router.get("/user/signup", (req,res) => {
    res.render('signup');
})
router.post("/add/user", (req,res) => {
    userController.addUser(req,res);
})
router.post("/login", (req, res) => {
    userController.doLogin(req,res);
})
router.get("/student/add/page",(req,res)=>{
    res.render('addstudent')
})
module.exports = router;