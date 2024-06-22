import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:[6,"username should be atleast 6 chars long!"],
    },
    password:{
      type:String,
      required:[true,'Password cannot be empty!'],
    }
},{timestamps:true});

export const User=mongoose.model('User',userSchema);