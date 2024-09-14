const moment = require("moment")

function GetDate() {
  console.log(moment().format("YYYY/MM/DD hh:mm:ss"))
};

GetDate()