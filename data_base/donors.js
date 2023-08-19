const mongoose=require('mongoose');

const donorSchema=new mongoose.Schema({

    Name : {
        type:String,
        required:true
    }
    ,

    age :{
        type : Number,
        required : true
    }
    ,
    dob : {
        type:String,
        required:true
    }
    ,

    bg : {
         type : String,
         required: true
    }
    ,

    gender : {
        type:String,
        required : true
    }
    

})

const donor=new mongoose.model('Donor',donorSchema);
module.exports = donor;