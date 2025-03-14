import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import userRouter from './usersApp/usersRouter'
import postRouter from './postsApp/postsRouter'
import tagsRouter from './tagsApp/tagsRouter'

const app: express.Express = express()
dotenv.config()

const PORT = 8000
const HOST = "localhost"

app.set('view engine', 'ejs')
app.set('views', './templates')

app.use(cors({
  origin: ['http://localhost:3000']
}))

app.use(express.json())
app.use(cookieParser())
app.use('/static/', express.static('./static/'))

app.use('/', userRouter.router)

app.use('/api/posts', postRouter.router)
app.use('/api/tags', tagsRouter.router)
app.use('/api/users', userRouter.router)

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`)
})