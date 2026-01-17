const errorMiddleware = ( err, req , res, next )=>{
    try {
        let error = {...err};
        error.message = err.message;
        //mongoose bad objectid
        if( err.name =='CasteError'){
            const  message  ='resourse not found';
            error = new Error(message);
            error.statusCode=400;
        }
        //mongoose duplicate key
        if(err.code == '11000'){
            const message  = 'duplicate field value entered';
            error = new Error(message);
            error.statusCode = 400;
        }
        // validation error 
        if(err.code == 'ValidationError'){
            const message = Object.values(err.errors).map(val=>val.message);
            error = new Error(message.join(', '));
            error.statusCode=400;
        }
        res.status(error.statusCode || 500 ).json({sucess:false,error:error.message || 'server Error'});
    }
    catch(error){
        next(error);
    }
}
export default errorMiddleware;