import loginMiddleware from '../middlewares/loginMiddleware';
import postController from './postController';
import express, { Express, Request, Response } from 'express'

const router = express.Router()

router.get('/all', postController.getAllPosts)
router.get('/:id', postController.getPostById)
router.post('/create', postController.createPost)

export default { router } 