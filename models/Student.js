const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');
const Schema = mongoose.Schema;
let studentSchema = Schema({
    rollNo: { type: Number, required: true },
    studentName: { type:String, },
    fatherName: {type: String, required:true},
    course: { type: String, required: true},
    branch: { type: String, required: true},
    yearOfAddmission: { type: String, },
    createdAt: Date,
    updatedAt: Date,
});
studentSchema.plugin(timestamps, {index: true});
module.exports = mongoose.model('Student', studentSchema);