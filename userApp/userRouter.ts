import userControllers from './userController';
import { Router } from 'express';

const router = Router();

router.post('/login', userControllers.loginUser)
router.get('/login', userControllers.login)

router.post('/registration', userControllers.registrationUser)
router.get('/registration', userControllers.registration)

export default { router }