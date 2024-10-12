import { posts, getAllPosts as getAllPostsService, getPostById as getPostByIdService, createPost as createPostService } from '../services/postService'
import express, { Express, Request, Response } from 'express';

function getAllPosts(req: Request, res: Response) {
    const context = getAllPostsService()
    res.render('posts', context)
};

function getPostById(req: Request, res: Response) {
    const id: any = req.params.id
    const context = getPostByIdService(id)
    if (id <= posts.length && id >= 1){
        res.render("post", context)
      } else if (id == "create"){
        res.render("post_create")
      } else {
        res.send("This page does not exist")
      };
};

function createPost(req: Request, res: Response) {
    const data = req.body
    createPostService(data)
    res.send('send');
}

export { posts, getAllPosts, getPostById, createPost };