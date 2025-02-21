import postController from './tagController';
import express from 'express'

const router = express.Router()

router.get('/tag/all', postController.getAllPosts)

export default { router }