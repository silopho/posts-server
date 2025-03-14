import postController from './tagsController';
import express from 'express'

const router = express.Router()

router.get('/', postController.getAllPosts)

export default { router }