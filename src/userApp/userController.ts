import userService from "./userService"
import { Request, Response } from 'express'

async function loginUser(req: Request, res: Response){
    const data = req.body
    const result = await userService.loginUser(data)
    res.json(result)
}

async function registrationUser(req: Request, res: Response){
    const data = req.body
    const result = await userService.registrationUser(data)
    res.json(result)
}

async function getUserById(req: Request, res: Response){
    const id = res.locals.userId
    const result = await userService.getUserById(id)
    res.json(result)
}

export default { loginUser, registrationUser, getUserById }