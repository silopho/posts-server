import userRepository from "./userRepository";
import prismaClient from "../prisma/prismaClient";

type User = {
    username: string;
    text: string;
    email: string;
    password: string;
}

async function registrationUser(data: any) {
    let status = null
    if (await userRepository.getUserByEmail(data.email) == null && await userRepository.getUserByUsername(data.username) == null) {
        await userRepository.createUser(data)
        status = "done"
    }
    return status
}

async function loginUser(data: any) {
    let status = null
    const user = await userRepository.getUserByEmail(data.email)
    if (user) {
        if (user?.password == data.password) {
            status = "done"
        } else {
            status = "password incorrect"
        }
    } else {
        status = "user not found"
    }
    return status
}

export default { registrationUser, loginUser }