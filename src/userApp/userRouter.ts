import userControllers from './userController'
import { Router } from 'express'

const router = Router()

router.post('/login', userControllers.loginUser)
router.post('/register', userControllers.registrationUser)

export default { router }