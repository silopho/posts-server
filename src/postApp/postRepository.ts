import { Prisma } from '@prisma/client'
import { prisma } from '../../prisma/prismaClient'
import { IPost } from '../types/types';

async function getAllPosts() {
    try {
        let posts = await prisma.post.findMany({})
        return posts
    } catch(error) {
        console.log(error)
    }
}

async function getPostById(id: number){
    try {
        let post = await prisma.post.findUnique({
            where: {
                id: id
            }
        })
        return post
    } catch(error) {
        console.log(error)
    }
}

async function createPost(data: IPost){
    try {
        let post = await prisma.post.create({
            data: data
        })
        return post
    } catch(error) {
        console.log(error)
    }
}  

export default { getAllPosts, getPostById, createPost }