import postService from './postService'
import express, { Express, Request, Response } from 'express';

async function getAllPosts(req: Request, res: Response) {
    const context = await postService.getAllPosts()
    res.render('posts', context)
};

function getPostById(req: Request, res: Response) {
    const id: number = Number(req.params.id)
    const post = postService.getPostById(id)
    if (id <= post.length) {
        res.render('product', post)
    } else{
        res.send("This page does not exist")
    }
}


function createPost(req: Request, res: Response) {
    const data = req.body
    data.id = postService.posts.length + 1
    postService.createPost(data)
    res.send('send')
}

export default { getAllPosts, getPostById, createPost }