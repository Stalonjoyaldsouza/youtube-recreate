import express from 'express';
import {PORT} from './config/env.js';
import errorMiddleware from './src/middleware/error.middleware.js';
import authRouter from './src/routes/auth.routes.js';

const app = express();

app.use(errorMiddleware);

app.get('/',(req,res)=>{
    res.send('welcome to YOUTUBE');
});

app.get('/api/v1/auth',authRouter);
app.get('/api/v1/',);
app.get('/api/v1/',);


app.listen(PORT,() =>   {
    console.log(`listening traker api at port :${PORT}`)

});
export default app;