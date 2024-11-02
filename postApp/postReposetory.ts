import { Prisma, PrismaClient } from '@prisma/client'
import prismaClient from '../prisma/prismaClient'

async function getAllPosts(id: number){
    try{
        let posts = await prismaClient.client.post.findMany()
        return posts
    } catch(err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
            }
        }
    }
}

async function getPostById(id: number){
    let post = await prismaClient.client.post.findUnique({
        where: {
            id: id
        }
    })
    return post
}

async function createPost(data: Prisma.PostCreateInput){
    let post = await prismaClient.client.post.create({
        data: data
    })
    return post
}  

export default { getAllPosts, getPostById, createPost }