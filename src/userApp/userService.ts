import userRepository from "./userRepository"
import { compare, hash } from "bcrypt"

import { ICreatePost, ICreateUser, IError, ISuccess, IUser } from "../types/types"

async function registrationUser(data: ICreateUser): Promise< IError | ISuccess<IUser> > {
    const userByEmail = await userRepository.getUserByEmail(data.email)
    if (userByEmail) {
        return { status: "error", message: "email already exists" }
    }

    const userByUsername = await userRepository.getUserByUsername(data.username)
    if (userByUsername) {
        return { status: "error", message: "username already exists" }
    }

    const hashedPassword: string = await hash(data.password, 10)
    data.password = hashedPassword

    const newUser = await userRepository.createUser(data)
    console.log(newUser)
    if (!newUser) {
        return { status: "error", message: "create error" }
    }

    return { status: "success", data: newUser }
}

async function loginUser(data: ICreatePost): Promise< IError | ISuccess<IUser> > {
    const user = await userRepository.getUserByEmail(data.email)
    console.log(user)

    if (!user) {
        return { status: 'error', message: 'user not found'}
    }


    const compared = await compare(data.password, user.password)
    if (!compared) {
        return { status: 'error', message: 'password incorrect'}
    }

    return {status: 'success', data: user};
}

export default { registrationUser, loginUser }