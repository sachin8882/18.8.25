const User = require('../models/User');
const Student = require('../models/Student');
const bcrypt = require('bcrypt');
async function addUser(req,res) {
    try{
        console.log(req.body, 'req.body');
        let user = new User(req.body);
        let encryptedPassword = bcrypt.hashSync(req.body.password, 10);
        // console.log(encryptedPassword);
        user.password = encryptedPassword; 
        await user.save();
        // console.log("data saved successfully....");
        res.redirect("/");
    }catch(err){
        // console.log(err);
    }
}
async function doLogin(req,res) {
    try{
        // console.log(req.body, 'req.body');
        let user =await User.findOne({ email: req.body.email });
        // console.log(user);
        if(user){
            let validPassword = bcrypt.compare(req.body.password, user.password);
            if(validPassword){
                let students = await Student.find({});
                res.render('welcomadmin.ejs', {
                    students: students
                });
            }else{
                res.send("<h1> invalid email/password...")
            }
        }else{
            res.send("<h1> user does not exist");
        }
    }catch(err){
        // console.log(err);
    }
}
module.exports = {
    addUser,
    doLogin
}