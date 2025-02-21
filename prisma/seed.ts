import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function seed(){
  await prisma.user.create({
    data: {
      username: 'silpo',
      email: 'silpo@gmail.com',
      password: 'silpo123'
    }
  })

  await prisma.tag.create({
    data: {
      name: 'Travel'
    }
  })

  await prisma.post.create({
    data: {
      name: "I`m in San Francisco",
      text: "I`m finally in San Francisco",
      date: "02.07.2021",
      userID: 1,
      tagId: 1
    }
  })
}

seed().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})