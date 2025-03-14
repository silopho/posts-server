import { Prisma } from "@prisma/client"

export type IUser = Prisma.UserGetPayload<{
    select: {
        id: true,
        username: true,
        email: true,
        role: true
    }
}>

export type ICreateUser = Prisma.UserCreateInput
