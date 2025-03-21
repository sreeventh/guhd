const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const posts = [
  {
    username: "sree",
    title: "post 1",
  },
  {
    username: "chinmay",
    title: "post 2",
  },
];

app.use(express.json());

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/jwtposts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

app.get("/", (req, res) => {
  res.json("JWT Tutorial");
});

app.listen(3000, () => {
  console.log(`Server running on port 3000: http://localhost:3000`);
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
