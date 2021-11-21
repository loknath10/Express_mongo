const express = require("express")
const app = express()
const mongoose = require("mongoose")
const url = "mongodb+srv://test:test123@cluster0.xirs0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mySchema=require('./schema')
mongoose.connect(url).then(()=>console.log("Connected DB"))
app.use(express.json())
app.post('/add-new-post',async(req,res)=>{

    const myStudent_name=req.body.Student_name;
    const myregistration=req.body.registration_no;
    const myMarks=req.body.Marks;
 
    try{
           const NewStudent=new mySchema( 
             {
                 Student_name:myStudent_name, 
                 registration_no:myregistration,
                 Marks:myMarks
             }
           )
           const savedStudent= await NewStudent.save()
           res.json(
               {'message':'Student data is saved','data':savedStudent}
             )
    }catch(err){
           res.json(err);
    }
 
 })
app.use("/",(req,res)=>
{
  
    res.json(
        {"message" : "Express server is  started "}
    )
})
app.listen(3002,()=>console.log("Express server started"))