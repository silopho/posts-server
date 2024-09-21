const express = require("express")
const moment = require("moment")
const path = require("path")

const app = express()

const PORT = 8000
const HOST = "localhost"

app.use('/static/', express.static(path.join(__dirname, 'static'))) 

function GetDate() {
  console.log(moment().format("YYYY/MM/DD hh:mm:ss"))
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./templates/index.html"))
});

app.get("/date", (req, res) => {
  GetDate()
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});