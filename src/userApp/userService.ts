import userRepository from "./userRepository";
import { prisma } from "../../prisma/prismaClient";
import { IError, ISuccess, User } from "../types/types";

async function registrationUser(data: any): Promise< IError | ISuccess<User> > {
    const user = await userRepository.getUserByEmail(data.email)
    if (user) {
        return { status: 'error', message: 'user already exists'}
    }
    const newUser = await userRepository.createUser(data)
    if (!newUser) {
        return {status: 'error', message: 'create error'}
    }
    return { status: 'success', data: newUser }
}

async function loginUser(data: any): Promise< IError | ISuccess<User> > {
    const user = await userRepository.getUserByEmail(data.email)
    if (!user) {
        return { status: 'error', message: 'user not found'}
    }
    if (data.password != user.password) {
        return { status: 'error', message: 'password incorrect'}
    }
    return {status: 'success', data: user};
}

export default { registrationUser, loginUser }