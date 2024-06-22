import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        lowercase:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
        min:6,
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:true,
    },
});

export const User=mongoose.model('User',userSchema);