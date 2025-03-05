import { authTokenMiddleware } from '../middlewares/loginMiddleware'
import userControllers from './userController'
import { Router } from 'express'

const router = Router()

router.post('/login', userControllers.loginUser)
router.post('/register', userControllers.registrationUser)

router.get("/me", authTokenMiddleware, userControllers.getUserById)

export default { router }