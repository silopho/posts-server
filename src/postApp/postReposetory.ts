import { Prisma, PrismaClient } from '@prisma/client'
import { prisma } from '../../prisma/prismaClient'
import { IError, ISuccess, Post } from '../types/types';

async function getAllPosts() {
    try{
        let posts = await prisma.post.findMany({})
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
    try {
        let post = await prisma.post.findUnique({
            where: {
                id: id
            }
        })
        return post
    } catch(err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
            }
        }
    }
}

async function createPost(data: Post){
    let post = await prisma.post.create({
        data: data
    })
    return post
}  

export default { getAllPosts, getPostById, createPost }