import userService from "./userService"
import { Request, Response } from 'express'

async function loginUser(req: Request, res: Response){
    const data = req.body
    const user = await userService.loginUser(data)
    res.json(user)
}

async function registrationUser(req: Request, res: Response){
    const data = req.body
    const user = await userService.registrationUser(data)
    res.json(user)
}

export default { loginUser, registrationUser }