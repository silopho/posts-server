import userService from "./userService"
import express, { Request, Response } from 'express'

function login(req: Request, res: Response){
    res.render('login')
}

async function loginUser(req: Request, res: Response){
    const user = await userService.loginUser(req.body)
    if (user == "done") {
        res.cookie('user', req.body.email)
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
    const user = await userService.registrationUser(req.body)
    if (user == "done") {
        res.cookie('user', req.body.email)
        console.log('Зареєстрован новий користувач')
        res.sendStatus(200)
    } else {
        console.log('Такий користувач вже існує')
        res.send("Такий користувач вже існує")
    }
}

export default { login, loginUser, registration, registrationUser }