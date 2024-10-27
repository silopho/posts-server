import userService from "./userService"
import express, { Request, Response } from 'express'

function login(req: Request, res: Response){
    res.render('login')
}

function loginUser(req: Request, res: Response){
    if (req.cookies.user == req.body.email) {
        res.send('Login successful')
    } else {
        res.send('Invalid')
    }
}

function registration(req: Request, res: Response){
    res.render('registration')
}

function registrationUser(req: Request, res: Response){
    const user = userService.registrationUser(req.body)
    if (user == "done") {
        res.cookie('user', req.body.email)
        res.sendStatus(200)
    } else {
        res.send("Такий користувач вже існує")
    }
    console.log(user)
}

export default { login, loginUser, registration, registrationUser}