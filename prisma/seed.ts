import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const posts = [
    {
      id: 1,
      name: "I`m in San Francisco",
      text: "I`m finally in San Francisco",
      date: "02.07.2021"
    },
    {
      id: 2,
      name: "Had a great day at the Golden Gate",
      text: "Visited the Golden Gate Bridge, the view is amazing!",
      date: "27.04.2023"
    },
    {
      id: 3,
      name: "Exploring Chinatown",
      text: "Chinatown is so lively, with amazing food and culture!",
      date: "14.07.2019"
    },
    {
      id: 4,
      name: "Last day in San Francisco",
      text: "Time to say goodbye to this amazing city.",
      date: "09.07.2021"
    },
];

async function createPosts(){
    posts.map(async (post) => {
        await prisma.post.create({
            data: post
        });
    })
}

async function main() {
    await createPosts()
}

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})