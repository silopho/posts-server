import {Request, Response, NextFunction} from 'express';
import userRepository from '../userApp/userRepository';

async function loginMiddleware(req: Request, res: Response, next: NextFunction) {
    const cookies = req.cookies
    if (await userRepository.getUserByEmail(cookies.user)) {
        console.log("user authenticated")
        next()
    } else {
        res.sendStatus(401)
    }
}

export default loginMiddleware