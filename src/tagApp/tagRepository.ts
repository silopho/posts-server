import { Prisma } from '@prisma/client'
import { prisma } from '../../prisma/prismaClient'

async function getAllTags() {
    try {
        let tags = await prisma.post.findMany({})
        return tags
    } catch(err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
            }
        }
    }
}

export default { getAllTags }