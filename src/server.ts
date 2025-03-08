import express, { Express, Request, Response } from 'express'
import postRouter from './postApp/postRouter'
import userRouter from './userApp/userRouter'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import postRouterApi from './postApp/postRouterApi'
import dotenv from 'dotenv'

const app: Express = express()
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

app.use('/post', postRouter.router)

app.use('/api', postRouterApi.router)

app.get("/", loginMiddleware, (req: Request, res: Response) => {
  res.render("index")
})


app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`)
})