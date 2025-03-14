import postService from './postsService'
import { Request, Response } from 'express';

async function getAllPosts(req: Request, res: Response) {
    const result = await postService.getAllPosts()
    res.json(result)
}

async function getPostById(req: Request, res: Response) {
    const id: number = Number(req.params.id)
    const result = await postService.getPostById(id)
    res.json(result)
}

export default { getAllPosts, getPostById }