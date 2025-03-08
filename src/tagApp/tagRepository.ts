import { prisma } from '../../prisma/prismaClient'

async function getAllTags() {
    try {
        let tags = await prisma.post.findMany({})
        return tags
    } catch(error) {
        console.log(error)
    }
}

export default { getAllTags }