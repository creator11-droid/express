const express = require("express");
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar/index.html"));
});

app.listen(5000, () => {
  console.log("app is lestening on port 5000");
});
