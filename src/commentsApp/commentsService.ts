import commentsRepository from "./commentsRepository"

import { IError, ISuccess } from "../types/types"
import { IComment } from './commentsTypes'

async function getAllComments(): Promise < IError | ISuccess<IComment[]> > {
    const comments = await commentsRepository.getAllComments()
    if (!comments) {
        return {status: 'error', message: 'comments not found'}
    }
    return { status: 'success', data: comments }
}

async function getCommentsByPostId(id: number): Promise < IError | ISuccess<IComment[]> > {
    const comments = await commentsRepository.getCommentsByPostId(id)
    if (!comments) {
        return {status: 'error', message: 'comments not found'}
    }
    return { status: 'success', data: comments }
}

async function getCommentsByUserId(id: number): Promise < IError | ISuccess<IComment[]> > {
    const comments = await commentsRepository.getCommentsByUserId(id)
    if (!comments) {
        return {status: 'error', message: 'comments not found'}
    }
    return { status: 'success', data: comments }
}

export default { getAllComments, getCommentsByPostId, getCommentsByUserId }