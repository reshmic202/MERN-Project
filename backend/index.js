import express from 'express';
import User from './model/user.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const mongoURI="mongodb://localhost:27017/reshmi";

const connectMongo=async()=>{
    try{
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    }catch(e){
        console.log(e)
    }
}

app.post("/signup", async(req, res) =>{
    const {phone,password}=req.body;

    try{
        const isUser= await User.findOne({
            phone:phone
        })
        if(isUser){
            return res.json({
                message: "User already exists"
            })
        }
        const newUser=new User({
            phone:phone,
            password:password
        })
        await newUser.save();
        res.json({
            message: "User created successfully"
        })
    }catch(err){
        console.log(err)
    }
})

app.post("/login", async(req, res) =>{
    const {phone,password}=req.body;
    try{
        const isUser= await User.findOne({
            phone:phone
        })
        if(isUser){
            if(isUser.password===password){
                res.json({
                    message: "User logged in successfully"
                })
            }else{
                res.json({
                    message: "Invalid password"
                })
            }
        }
        else{
            res.json({
                message: "User not found. Create a new account"
            })
        }
    }catch(err){
        console.log(err)
    }
})

connectMongo()

app.listen(5000, () => {
  console.log(' app listening on port 5000!');
});