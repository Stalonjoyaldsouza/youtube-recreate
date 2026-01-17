import {User} from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import {JWT_SECRET,JWT_EXPIRES_IN} from '../../config/env.js'
export const SignIn = async(req , res ,next)=>{

    const Session =await  mongoose.startSession();
    Session.startTransaction();

    try{
        const {email,name,password} = req.body;
        const existinguser = await User.findOne({email});
        if(existinguser){
            const error = new Error('user aldready exits');
            error.statusCode = 409;
            throw error ;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt);
        const newuser = await  User.create([{name,email,password:hashedpassword}],{Session});
        const token = jwt.sign({userId:newuser[0]._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});

        await Session.commitTransaction();
        await Session.endSession();
        res.status(201).json({
            success:true,
            message:'user created succesfully',
            data:{
                token,
                user: newUser[0],
            }
        })
    }
    catch(error){
        await Session.commitTransaction();
        await Session.endSession();
        next(error);
    }
}
export const SignUp = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
        const user = User.findOne({email});
        if(!user){
            const error = new Error('user is not found');
            error.statusCode=401;
            throw(error);
        }
        const validate_user = await bcrypt.compare(password,user.password);
        if(!validate_user){
            const error = new Error('incorrect password')
            error.statusCode = 401;
            throw (error);
        }
        const token = jwt.sign({userId:user._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});
        res.status(200).json({
            success:true,
            message:'user login succesful',
            data:{
                token,
                user,
            }
        })
    }
    catch(error){
        next(error);
    }
}
export const SignOut= async(req,res,next )=>{
    //sign out logic 

}
