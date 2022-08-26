const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/api/generate", (req, res) => {
  console.log(req.body);
  fs.writeFile("package.txt", req.body.username, function (err) {
    if (err) throw err;
    console.log("Package.txt was created!");
  });

  res.json({ user: "tobi" });
});

app.listen(3000, (req, res) => {
  console.log("run at 3000");
});
