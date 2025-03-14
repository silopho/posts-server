import { Request, Response } from 'express';

import commentsService from './commentsService'

async function getAllComments(req: Request, res: Response) {
    const result = await commentsService.getAllComments()
    res.json(result)
}

async function getCommentsByPostId(req: Request, res: Response) {
    const id: number = Number(req.params.id)
    const result = await commentsService.getCommentsByPostId(id)
    res.json(result)
}

async function getCommentsByUserId(req: Request, res: Response) {
    const id: number = Number(req.params.id)
    const result = await commentsService.getCommentsByUserId(id)
    res.json(result)
}

export default { getAllComments, getCommentsByPostId, getCommentsByUserId }