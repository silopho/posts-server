import { prisma } from '../../prisma/prismaClient'

async function getAllTags() {
    try {
        let tags = await prisma.tag.findMany({})
        return tags
    } catch(error) {
        console.log(error)
    }
}

export default { getAllTags }