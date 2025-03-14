import { prisma } from '../../prisma/prismaClient'

async function getAllComments() {
    try {
        const comments = await prisma.comment.findMany({})
        return comments
    } catch(error) {
        console.log(error)
    }
}

async function getCommentsByPostId(id: number) {
    try {
        const comments = await prisma.comment.findMany({
            include: {
                post: {
                    where: {
                        id: id
                    }
                }
            }
        })
        return comments
    } catch(error) {
        console.log(error)
    }
}

async function getCommentsByUserId(id: number) {
    try {
        const comments = await prisma.comment.findMany({
            include: {
                user: {
                    where: {
                        id: id
                    }
                }
            }
        })
        return comments
    } catch(error) {
        console.log(error)
    }
}

export default { getAllComments, getCommentsByPostId, getCommentsByUserId }