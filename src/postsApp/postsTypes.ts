import { Prisma } from "@prisma/client"

export type IPost = Prisma.PostGetPayload<{}>
export type ICreatePost = Prisma.UserCreateInput