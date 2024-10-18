import { PrismaClient } from '@prisma/client';
import { isAsExpression } from 'typescript';

const prisma = new PrismaClient()

async function createPost(){
    const post = await prisma.post.create({
        data: {
            name: "Test Post",
            text: "text post",
            author: "dev",
            date: "16.10.2024",
        }
    })
    console.log(post)
}

async function updatePost() {
    const post = await prisma.post.update({
        where: {
            id: 1
        },
        data: {
            name: "Updated Test Post",
            text: "updated text post",
            author: "dev",
            date: "17.10.2024",
        }
    })
    console.log(post)
}

async function findPost() {
    const post = await prisma.post.findUnique({
        where: {
            id: 1
        }
    })
    console.log(post)
}

async function createComment() {
    const comment = await prisma.comment.create({
        data: {
            author: "Dimas",
            text: "test comment",
            postId: 1
        }
    })
    console.log(comment)
}

async function createCommentMany() {
    const comments = await prisma.comment.createMany({
        data: [
            {
                author: "Dimas",
                text: "test comment 1",
                postId: 1
            },
            {
                author: "Miha",
                text: "test comment 2",
                postId: 1
            },
            {
                author: "Ivan",
                text: "test comment 3",
                postId: 1
            }
        ]
    })
    console.log(comments)
}


async function findComment() {
    const comment = await prisma.comment.findUnique({
        where: {
            id: 1
        }
    })
}

async function findCommentInfo() {
    const comment = await prisma.comment.findUnique({
        where: {
            id: 1
        }
    })
    const post = await prisma.post.findUnique({
        where: {
            id: comment?.postId
        },
        include:{}
    })
}

async function findPostComments() {
    const post = await prisma.post.findUnique({
        where: {
            id: 1
        }
    })
    const comments = await prisma.comment.findMany({
        where: {
            postId: post?.id
        },
        include: {}
    })
}

async function commentUpdate() {
    const comment = await prisma.comment.update({
        where: {
            id: 1
        },
        data: {
            text: "updated comment text"
        }
    })
    console.log(comment)
}

async function deleteComment() {
    const comment = await prisma.comment.delete({
        where: {
            id: 1
        }
    })
    console.log(comment)
}

async function deletePost() {
    await prisma.comment.deleteMany({
        where: {
            postId: 1
        }
    });
    const post = await prisma.post.delete({
        where: {
            id: 1
        }
    })
    console.log(post)
}

async function main() {
    await createPost()
    await findPost()
    await updatePost()
    await createComment()
    await createCommentMany()
    await findComment()
    await findCommentInfo()
    await findPostComments()
    await commentUpdate()
    await deleteComment()
    await deletePost()
}

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})