import { Router } from "express"

import commentsController from "./commentsController"

const router = Router()

router.get('/', commentsController.getAllComments)
router.get('/post/:id', commentsController.getCommentsByPostId)
router.get('/user/:id', commentsController.getCommentsByUserId)