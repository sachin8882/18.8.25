const Student = require('../models/Student');
const cloudinary = require('cloudinary').v2;
async function addStudent(req,res) {
    try{
        console.log(req.body, 'req.body');
        console.log(req.file, 'req.file');
        let student =await new Student(req.body);
        await student.save();
        let students = await Student.find({});
        res.render('studentlist',{
            students:students
        });
    }catch(err){
        console.log(err);
    }
}
async function deleteStudent(req, res) {
    try{
        let studentId = req.params._id;
        await Student.deleteOne({_id: studentId})
        let students = await Student.find({});
        res.render = ('welcomadmin', {
            students: students
        })
    }catch(err){
        console.log(err);
    }
}
async function openEditPage(req,res){
    try{
        let studentId =  req.params._id;
        let student = await Student.findOne({ _id: studentId});
        if(student){
            res.render('studenteditpage', {
                student: student
            })
        }else{
            res.render('loginpanel');
        }
    }catch(err){
        console.log(err);
    }
}
// /edit/student/:_id
async function editStudent(req,res) {
    try{
        const studentId = req.params._id;
        console.log(studentId + "studentId");
        let student = await Student.findOne({ _id: studentId });
        if(student){
            console.log(req.body, "req.body");
            student.rollNo = req.body.rollNo;
            student.studentName = req.body.studentName;
            student.fatherName = req.body.fatherName;
            student.course = req.body.course;
            student.branch = req.body.branch;
            student.yearOfAdmission = req.body.yearOfAdmission;
            await student.save();
            let students = await Student.find({});
            res.render('welcomadmin', {
                students: students
            });
        }else{
            res.send(" student not found ");
        }
    }catch(err){

    }
}
module.exports = {
    addStudent,
    deleteStudent,
    openEditPage,
    editStudent
}