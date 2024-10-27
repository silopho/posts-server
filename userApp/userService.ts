import userRepository from "./userRepository";
import prismaClient from "../prisma/prismaClient";

type User = {
    username: string;
    text: string;
    email: string;
    password: string;
}

function registrationUser(data: any) {
    let status = null
    if (userRepository.getUserByEmail(data.email) == null && userRepository.getUserByUsername(data.username) == null) {
        userRepository.createUser(data)
        status = "done"
    }
    return status
}

export default { registrationUser }