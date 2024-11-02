import express, { Express, Request, Response } from 'express'
import postRouter from './postApp/postRouter'
import userRouter from './userApp/userRouter'
import cookieParser from 'cookie-parser'
import loginMiddleware from './middlewares/loginMiddleware'

const app: Express = express()

const PORT = 8000
const HOST = "localhost"

app.set('view engine', 'ejs')
app.set('views', './templates')
app.use(loginMiddleware)

app.use(express.json())
app.use(cookieParser())
app.use('/static/', express.static('./static/'))
app.use('/post', postRouter.router)

app.use('/', userRouter.router)

app.get("/", loginMiddleware, (req: Request, res: Response) => {
  res.render("index")
})

app.get("/user", (req: Request, res: Response) => {
  res.render("user")
})

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`)
})