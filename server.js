const express = require("express")
const moment = require("moment")
const path = require("path")

const app = express()

const PORT = 8000
const HOST = "localhost"

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use(express.json()) 
app.use('/static/', express.static(path.join(__dirname, 'static'))) 

const posts = [
  {
    id: "1",
    post: "I`m in San Francisco",
    text: "I`m finally in San Francisco",
    author: "Andrey",
    date: "02.07.2021"
  },
  {
    id: "2",
    post: "Had a great day at the Golden Gate",
    text: "Visited the Golden Gate Bridge, the view is amazing!",
    author: "Alex",
    date: "27.04.2023"
  },
  {
    id: "3",
    post: "Exploring Chinatown",
    text: "Chinatown is so lively, with amazing food and culture!",
    author: "Alexander",
    date: "14.07.2019"
  },
  {
    id: "4",
    post: "Last day in San Francisco",
    destextcription: "Time to say goodbye to this amazing city.",
    author: "Andrey",
    date: "09.07.2021"
  },
]

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
  } else if (id == "create"){
    res.render("post_create")
  } else {
    res.send("This page does not exist")
  }
})

app.post("/post/create", (req, res) => {
  const data = req.body
  console.log(data.posts)
  posts.push(data)
  res.send('send');
});

app.get("/user", (req, res) => {
  res.render("user")
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});