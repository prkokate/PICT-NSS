const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://prkokate10:Rajsheet1510@cluster0.xsshhjl.mongodb.net/test').then(()=>{
    console.log('Connected to database!');
}).catch((err)=>{
    console.log('ERROR :',err);
})