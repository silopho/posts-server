import postService from './postServiceApi'
import { Request, Response } from 'express';

async function getAllPosts(req: Request, res: Response) {
    const posts = await postService.getAllPosts()
    res.json(posts)
}

async function getPostById(req: Request, res: Response) {
    const id: number = Number(req.params.id)
    const post = await postService.getPostById(id)
    res.json(post)
}

export default { getAllPosts, getPostById }