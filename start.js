const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const htmlOutput = require('./lib/htmlOutput')
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/api/generate", (req, res) => {
  // console.log(req.body);
  fs.mkdir("app", { recursive: true}, function (err) {
    if (err) throw err

    fs.writeFile("app/" + req.body.a + ".html", htmlOutput(), function (err) {
      if (err) throw err;
      console.log("package.json was created!");
    });
  });
  // fs.writeFile("app/index.html", req.body.b, function (err) {
  //   if (err) throw err;
  //   console.log("index.html was created!");
  // });

  // fs.writeFile("app/package.json", req.body.b, function (err) {
  //   if (err) throw err;
  //   console.log("package.json was created!");
  // })
});

app.listen(3000, (req, res) => {
  console.log("run at 3000");
});
