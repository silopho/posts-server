import express, { Express, Request, Response } from 'express';
import { router as postRouter } from './routers/postRouter'

const app: Express = express()

const PORT = 8000
const HOST = "localhost"

app.set('view engine', 'ejs')
app.set('views', './templates')

app.use(express.json()) 
app.use('/static/', express.static('./static/'))

app.use('/post', postRouter)

app.get("/", (req, res) => {
  res.render("index")
});

app.get("/user", (req, res) => {
  res.render("user")
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});