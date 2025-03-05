import userRepository from "./userRepository"
import { compare, hash } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { SECRET_KEY } from "../config/token";

import { ICreatePost, ICreateUser, IError, ISuccess, IUser } from "../types/types"

async function registrationUser(data: ICreateUser): Promise< IError | ISuccess<string> > {
    const userByEmail = await userRepository.getUserByEmail(data.email)
    if (userByEmail) {
        return { status: "error", message: "email already exists" }
    }

    const userByUsername = await userRepository.getUserByUsername(data.username)
    if (userByUsername) {
        return { status: "error", message: "username already exists" }
    }

    const hashedPassword: string = await hash(data.password, 10)
    const userData = {
        ...data,
        password: hashedPassword
    }

    const newUser = await userRepository.createUser(userData)
    console.log(newUser)
    
    if (!newUser) {
        return { status: "error", message: "create error" }
    }

    const token = sign({id: newUser.id}, SECRET_KEY, {expiresIn: '1d'})

    return {status: 'success', data: token};
}

async function loginUser(data: ICreatePost): Promise< IError | ISuccess<string> > {
    const user = await userRepository.getUserByEmail(data.email)
    console.log(user)

    if (!user) {
        return { status: 'error', message: 'user not found'}
    }

    const isMatch: boolean = await compare(data.password, user.password)
    if (!isMatch) {
        return { status: 'error', message: 'password incorrect'}
    }

    const token = sign({id: user.id}, SECRET_KEY, {expiresIn: '1d'})

    return {status: 'success', data: token};
}

async function getUserById(id: number): Promise <IError | ISuccess<IUser>>{
    const user = await userRepository.getUserById(id);
    console.log(user)
    
    if (!user) {
        return {status: 'error', message: "User is not found"}
    }

    return {status: 'success', data: user}
}

export default { registrationUser, loginUser, getUserById }