import userService from "./userService"
import express, { Request, Response } from 'express'
import SECRET_KEY from '../config/token';
import { sign } from 'jsonwebtoken'

function login(req: Request, res: Response){
    res.render('login')
}

async function loginUser(req: Request, res: Response){
    const data = req.body.email
    const user = await userService.loginUser(data)
    if (user.status == 'error') {
        res.send(user.message)
        return
    }
    const token = sign(user.data, SECRET_KEY, {expiresIn: '1h'})
    res.cookie('token', token)
    res.sendStatus(200)
}

function registration(req: Request, res: Response){
    res.render('registration')
}

async function registrationUser(req: Request, res: Response){
    const data = req.body
    const user = await userService.registrationUser(data)
    if (user.status == 'error') {
        res.send(user.message)
        return
    }
    const token = sign(user.data, SECRET_KEY, {expiresIn: '1h'})
    res.cookie('token', token)
    res.sendStatus(200)
}

export default { login, loginUser, registration, registrationUser }