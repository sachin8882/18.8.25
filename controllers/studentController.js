const Student = require('../models/Student');
async function addStudent(req,res) {
    try{
        console.log(req.body, 'req.body');
        let student =await new Student(req.body);
        await student.save();
        
    }catch(err){
        console.log(err);
    }
}
module.exports = {
    addStudent
}