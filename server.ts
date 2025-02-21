import express, { Express, Request, Response } from 'express'
import postRouter from './src/postApp/postRouter'
import userRouter from './src/userApp/userRouter'
import cookieParser from 'cookie-parser'
import loginMiddleware from './src/middlewares/loginMiddleware'
import cors from 'cors'
import postRouterApi from './src/postApp/postRouterApi'

const app: Express = express()

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

app.get("/user", (req: Request, res: Response) => {
  res.render("user")
})

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`)
})