const express = require('express');
const router =  express.Router();
const studentController = require('../controllers/studentController');
router.post("/add/student",(req,res)=>{
    studentController.addStudent(req,res);
});
module.exports = router;