import mongoose  from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , 'user name is required '],
        trim:true,
        minlength:2,
        maxlength:10,
    },

    email:{
        type: String,
        required:[true,'user email is required'],
        unique:true,
        trim:true,
        lowercase:true,
        match:[/\S+@\S+\.\S+/,'please fill the email address'],
    },

    password:{
        type:String,
        required:(true,'password is required'),
        trim:true,
        minLenght:7,
        maxlength:200,
    }
},{timestamps:true});
const User = new mongoose.model('User',userSchema);
export default User;
