const express = require("express");
const app = express();
//do something as
//do something in new brench
app.use(express.static("public"));

app.listen(3009, () => {
  console.log("listening....");
});
