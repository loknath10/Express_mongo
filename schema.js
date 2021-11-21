//import mongoose from 'mongoose';
const mongoose =require("mongoose")
  const { Schema } = mongoose;

  const schema = new Schema({
    Student_name:  String, 
    registration_no: Number,
    Marks: Number
    
  });
  module.exports=mongoose.model("mystudent",schema,"SL-LAB-13")