import postService from './tagService'
import { Request, Response } from 'express';

async function getAllPosts(req: Request, res: Response) {
    const tags = await postService.getAllTags()
    res.json(tags)
}

export default { getAllPosts }