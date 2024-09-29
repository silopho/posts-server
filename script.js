const express = require("express")
const moment = require("moment")
const path = require("path")

const app = express()

const PORT = 8000
const HOST = "localhost"

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use('/static/', express.static(path.join(__dirname, 'static'))) 

function GetDate() {
  console.log(moment().format("YYYY/MM/DD hh:mm:ss"))
};

app.get("/", (req, res) => {
  res.render("index")
});

app.get("/date", (req, res) => {
  GetDate()
});

app.get("/posts", (req, res) => {
  const context = {
    posts: [
      { author: "Andrey", text: "Hello world!" },
      { author: "Olexey", text: "Hello world!" },
      { author: "Vasya", text: "Hello world!" },
    ]
  }
  res.render("posts", context)
});

app.get("/user", (req, res) => {
  console.log("Хтось зайшов на сторінку користувачів")
  res.render("user")
});
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});