import { posts, getAllPosts, getPostById, createPost } from '../controllers/postController';
import express, { Express, Request, Response } from 'express'
const router = express.Router()

router.get('/all', getAllPosts)
router.get('/:id', getPostById)
router.post('/create', createPost)

export { router };