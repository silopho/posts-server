import postController from './postControllerApi';
// Импорт не используется, нужно убрать
import express, { Express, Request, Response } from 'express'

const router = express.Router()

router.get('/post/all', postController.getAllPosts)
router.get('/post/:id', postController.getPostById)

export default { router }