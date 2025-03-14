import { prisma }  from "../../prisma/prismaClient"

import { ICreatePost } from "../postsApp/postsTypes"

async function createUser(data: ICreatePost){
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

async function getUserById(id: number){
    try {
        let user = await prisma.user.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                email: true,
                username: true,
                role: true
            }
        })
        return user
    } catch(error) {
        console.log(error)
    }
}

export default { createUser, getUserByEmail, getUserById }