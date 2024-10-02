const express = require("express")
const moment = require("moment")
const path = require("path")

const app = express()

const PORT = 8000
const HOST = "localhost"

const posts = [
  {
    "id": "1",
    "post": "I`m in San Francisco",
    "description": "I`m finally in San Francisco",
    "author": "Andrey",
    "time": "02.07.2021"
  },
  {
    "id": "2",
    "post": "Had a great day at the Golden Gate",
    "description": "Visited the Golden Gate Bridge, the view is amazing!",
    "author": "Alex",
    "time": "27.04.2023"
  },
  {
    "id": "3",
    "post": "Exploring Chinatown",
    "description": "Chinatown is so lively, with amazing food and culture!",
    "author": "Alexander",
    "time": "14.07.2019"
  },
  {
    "id": "4",
    "post": "Last day in San Francisco",
    "description": "Time to say goodbye to this amazing city.",
    "author": "Andrey",
    "time": "09.07.2021"
  },
]

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use('/static/', express.static(path.join(__dirname, 'static'))) 

app.get("/", (req, res) => {
  res.render("index")
});

app.get("/posts", (req, res) => {
  const context = {
    posts
  }
  res.render("posts", context)
});

app.get("/post/:id", (req, res) => {
  const id = req.params.id
  const context = {
    post: posts[id-1]
  }
  if (id <= posts.length && id >= 1){
    res.render("post", context)
  } else {
    res.send("This page does not exist")
  }
})

app.get("/user", (req, res) => {
  res.render("user")
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});