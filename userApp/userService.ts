import userRepository from "./userRepository";
import prismaClient from "../prisma/prismaClient";

type User = {
    username: string;
    text: string;
    email: string;
    password: string;
}

interface IUserError {
    status: 'error',
    message: string
}

interface IUserSuccess {
    status: 'success',
    data: string
}

interface IUser{
    id: number,
    username: string,
    email: string,
    password: string
}

async function registrationUser(data: any): Promise< IUserError | IUserSuccess > {
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

async function loginUser(data: any): Promise< IUserError | IUserSuccess > {
    const user = await userRepository.getUserByEmail(data.email)
    if (data.password != user?.password) {
        return { status: 'error', message: 'password incorrect'}
    }
    return {status: 'success', data: user};
}

export default { registrationUser, loginUser }