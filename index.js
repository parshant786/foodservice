const express = require("express");
const app = express();
//do something as
app.use(express.static("public"));

app.listen(3009, () => {
  console.log("listening....");
});
