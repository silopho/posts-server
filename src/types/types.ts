import { Prisma } from "@prisma/client"

export interface IError {
    status: 'error'
    message: string
}

export interface ISuccess<T> {
    status: 'success'
    data: T
}
// специфические типы лучше перенести по приложениям
export type IUser = Prisma.UserGetPayload<{}>
export type ICreateUser = Prisma.UserCreateInput

export type IPost = Prisma.PostGetPayload<{}>
export type ICreatePost = Prisma.UserCreateInput

export type ITag = Prisma.TagGetPayload<{}>