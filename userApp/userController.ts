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
    if (user == "done") {
        const token = sign(data, SECRET_KEY, {expiresIn: '1h'})
        res.cookie('token', token)
        console.log('Успішний вхід')
        res.sendStatus(200)
    }
    if (user == "password incorrect") {
        console.log('Невірний пароль')
        res.send("Невірний пароль")
    }
    if (user == "user not found") {
        console.log('Такого користувач не існує')
        res.send("Такого користувач не існує")
    }
}

function registration(req: Request, res: Response){
    res.render('registration')
}

async function registrationUser(req: Request, res: Response){
    const data = req.body
    const user = await userService.registrationUser(data)
    if (user == "done") {
        const token = sign(data, SECRET_KEY, {expiresIn: '1h'})
        res.cookie('token', token)
        console.log('Зареєстрован новий користувач')
        res.sendStatus(200)
    } else {
        console.log('Такий користувач вже існує')
        res.send("Такий користувач вже існує")
    }
}

export default { login, loginUser, registration, registrationUser }