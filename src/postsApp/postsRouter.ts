import postController from './postsController';
import { Router } from 'express'

const router = Router()

router.get('/', postController.getAllPosts)
router.get('/:id', postController.getPostById)

export default { router }