import {Router} from 'express';
import {SignIn,SignUp,SignOut} from '../controller/auth.controller'

const authRouter = Router();

authRouter.post('/Sign-In',SignIn);
authRouter.post('/Sign-Out',SignOut);
authRouter.post('/Sign-Up',SignUp);

export default authRouter