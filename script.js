const express = require("express")
const moment = require("moment")

const app = express()
const PORT = 8000
const HOST = "localhost"

function GetDate() {
  console.log(moment().format("YYYY/MM/DD hh:mm:ss"))
};

app.get("/date", () => {
  GetDate()
});
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});