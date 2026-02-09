import  {DB_URI,NODE_ENV} from '../../config/env.js';
import mongoose from 'mongoose';

if(!DB_URI){
    throw  new Error('please declare the database uri variable in the .env.local');
}

const connecttodatabase= async() =>{
    try{
        await mongoose.connect(DB_URI);
        console.log(`CONNECT TO THE DATABASE : ${NODE_ENV}`);
    }
    catch(error){
        console.error('error connecting to database ',error);
        process.exit(1);
    }
}
export default connecttodatabase ;