// Импорт не используется, нужно убрать
import { Prisma, PrismaClient } from '@prisma/client'
import { prisma } from '../../prisma/prismaClient'
// Импорт не используется, нужно убрать
import { IError, ISuccess, IPost } from '../types/types';

// Сделай репозитории под один стиль, если проверяешь ошибки призмы, тогда во всех репо
async function getAllPosts() {
    try{
        let posts = await prisma.post.findMany({})
        return posts
    } catch(err) {
        // этот тип можно вынести в types.ts
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                // лучше не выкидывать ошибку, либо вернуть ее, либо ничего не делать, но тогда нужно клиенту сказать, что мол ошибка
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

async function createPost(data: IPost){
    // try...catch
    let post = await prisma.post.create({
        data: data
    })
    return post
}  

export default { getAllPosts, getPostById, createPost }