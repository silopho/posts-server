import { Prisma } from "@prisma/client"
import prismaClient from "../prisma/prismaClient";

async function createUser(data: Prisma.UserCreateInput) {
    await prismaClient.client.user.create({
        data: data
    })
}

async function getUserByEmail(email: string) {
    return await prismaClient.client.user.findFirst({
        where: { email: email }
    })
}

async function getUserByUsername(username: string) {
    return await prismaClient.client.user.findFirst({
        where: { username: username }
    })
}

async function loginUser(data: Prisma.UserWhereInput) {
    return await prismaClient.client.user.findFirst({
        where: data
    })
}

export default { createUser, getUserByEmail, getUserByUsername, loginUser }