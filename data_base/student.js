

const mongoose=require('mongoose');
const studentSchema = new mongoose.Schema({

    Name : {
       type : String,
       required : true
       
    }
,

email : {
    type : String,
    required : true
}
,
contactnum : {
    type : String,
    required : true
}
,
classes : {
    type : String,
    required : true
}
,
division : {
    type : Number,
    required : false
}


});


const students=new mongoose.model('Registered_student',studentSchema);
module.exports = students;