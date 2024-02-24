import mongoose from "mongoose";

const UserModel=new mongoose.Schema({
    phone:{
        type:Number,
    },
    password:{
        type:String,
    }
},{timestamps:true})

const User=mongoose.model("User",UserModel)

export default User;