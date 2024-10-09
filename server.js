const express = require("express")
const moment = require("moment")
const path = require("path")
const postRouter = require("./routers/postRouter")

const app = express()

const PORT = 8000
const HOST = "localhost"

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use(express.json()) 
app.use('/static/', express.static(path.join(__dirname, 'static')))

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