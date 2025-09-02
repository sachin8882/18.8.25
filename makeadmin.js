const User = require('./models/User');
const bcrypt = require('bcrypt');
async function makeAdmin() {
    try{
        let user = await User.findOne({ email: 'sachin123@gmail.com' });
        if(user){
            // console.log("user updated");
        }else{
            user = new User();
            user.firstName = 'Sachin';
            user.lastName = 'Sharma';
            user.email = 'sachin123@gmail.com';
            let encryptedPassword = bcrypt.hashSync('123456', 10);
            user.password = encryptedPassword;
            user.userType = 'Admin';
            await user.save();
            // console.log('user saved successfully.... ');
        }
    }catch(err){
        // console.log(err)
    }
}
module.exports = makeAdmin;