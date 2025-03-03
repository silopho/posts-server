import postService from './postService'
// Импорт не используется, нужно убрать
import express, { Express, Request, Response } from 'express';

async function getAllPosts(req: Request, res: Response) {
    const context = await postService.getAllPosts()
    res.render('posts', context)
};

async function getPostById(req: Request, res: Response) {
    const id: number = Number(req.params.id)
    const post = await postService.getPostById(id)
    if (post) {
        res.render('product', post)
    } else {
        res.send("This page does not exist")
    }
}


async function createPost(req: Request, res: Response) {
    const data = req.body
    console.log(data)
    
    const result = await postService.createPost(data);

    if (result.status == 'error'){
        res.send(result.message);
    } else {
        res.send(result.data)
    }
}

export default { getAllPosts, getPostById, createPost }