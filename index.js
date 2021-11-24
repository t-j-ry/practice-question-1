const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();
const fs = require('fs');

// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createcard");
});

app.post("/createcard", (req, res) => {
  fs.readFile("./database.json", (err, data) => {
    if (err) {
      return
    } else {
      let database = JSON.parse(data)
      let users = database.users
    }
  })
  let user = {
    id: Math.random(),
    fullname: req.body.fullname,
    aboutMe: req.body.aboutme,
    githubUrl: req.body.githuburl,
    twitterUrl: req.body.twitterurl
  }
  console.log(user)
})


app.get("/people/:id", (req, res) => {
  res.render("people");
});

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});
