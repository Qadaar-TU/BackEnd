const PORT = 7005;
const express = require("express");
const morgan = require("morgan");
const { getDB } = require("./getDB");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_, res) => res.json({ status: "ok" }));

app.get("/todo", (_, res) => {
  getDB()
    .then((db) => db.collection("todo").find().toArray())
    .then((todoData) => res.json(todoData));
});

app.listen(PORT, () => console.log("server ready at PORT", PORT));
