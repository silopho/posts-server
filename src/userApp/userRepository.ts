import { Prisma } from "@prisma/client"
import { prisma }  from "../../prisma/prismaClient"

async function createUser(data: Prisma.UserCreateInput) {
    try {
        const user = await prisma.user.create({
            data: data
        })
        return user
    } catch (error) {
        console.error(error)
    }
}

async function getUserByEmail(email: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        return user
    } catch(error) {
        console.log(error)
    }
}

async function getUserByUsername(username: string) {
    try{
        let user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })
        return user
    } catch(error) {
        console.log(error)
    }
}

export default { createUser, getUserByEmail, getUserByUsername }