import {Request, Response, NextFunction} from 'express';
import userRepository from '../userApp/userRepository';
import { verify } from 'jsonwebtoken';
import SECRET_KEY from '../config/token';

async function loginMiddleware(req: Request, res: Response, next: NextFunction) {
    const cookies = req.cookies
    if (cookies.token){
        const token = verify(cookies.token, SECRET_KEY)
        res.locals.user = token
        next()
    } else {
        res.sendStatus(401)
    }
}

export default loginMiddleware