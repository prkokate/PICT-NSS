const express=require('express');
const app=express();
const port=3000;
const path=require('path');
const {nextTick}=require('process');

// path.join(__dirname,'./public/blood_donation.html');
require('./data_base/connection');
const donor=require('./data_base/donors');
const students=require('./data_base/student');

const statpath=path.join(__dirname,'./public');

app.use(express.static(statpath));

app.get('/',(req,res)=>{

  res.sendFile(path.join(__dirname, './public/index.html'));
})



app.use(express.json());
app.use(express.urlencoded({extended : true}));


// app.get('/',(req,res)=>{
//     res.sendFile('./public/blood_donation.html');
// })

app.listen(port,()=>{
  console.log('Connected to port ',port);
})

app.post('/form',(req,res)=>{
  res.sendFile(path.join(__dirname, './public/bdform.html'));
})

app.post('/',(req,res)=>{

  res.sendFile(path.join(__dirname, './public/index.html'));
})


app.post('/Blood-donation',(req,res)=>{

  res.sendFile(path.join(__dirname, './public/blood_donation.html'));
})


app.post('/cosmos',(req,res)=>{

  res.sendFile(path.join(__dirname, './public/cosmos.html'));
})

app.post('/Past-Events',(req,res)=>{

  res.sendFile(path.join(__dirname, './public/page.html'));
})

app.post('/Camps',(req,res)=>{

  res.sendFile(path.join(__dirname, './public/camp.html'));
})

app.post('/Bhumi-drive',(req,res)=>{
  res.sendFile(path.join(__dirname,'./public/bhumi.html'));
})

app.post('/Upcoming-events',(req,res)=>{
  res.sendFile(path.join(__dirname,'./public/upcomingevents.html'))
})



app.post('/Details',async(req,res)=>{

    /* res.sendFile(path.join(__dirname,'./public/bdform.html'));*/
    var newdata=new donor(req.body);
    const {Name,age,dob,bg,gender}=(req.body);
    var check= await donor.find({Name:Name});

    if(check[0]){
      if(check[0].Name==Name){
        res.send('<center> <h1 style="margin-top:10rem; font-size:5rem;" >You have already registered!</h1> </center>');
      }
    }
    else{
      newdata.save().then(() =>{
        // res.sendFile(path.join(__dirname,'./public/certificate.html'));
        res.sendFile(path.join(__dirname, './public/certificate.html'));
        console.log('data submitted!');
      }).catch((err)=>{
        res.send('<h1>Registration Failed!</h1>')
        console.log(err);
      })
    }

    
})





app.post('/Register',async(req,res)=>{
  var newdata = new students(req.body);
  
  const {Name,email,contactnum,classes,division}=(req.body);

  var check= await students.find({email:email});
  
  if(check[0]){
      if(check[0].email==email){
          res.send('You have already registered!');
      }

  }

  else{

   newdata.save().then(()=>{
        res.sendFile(path.join(__dirname, './public/certificate.html'));
       console.log('data submitted!'); 
   }).catch((err)=>{
      console.log(err);
   })
  }
})
