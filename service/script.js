const express = require("express");
const app = express();
app.use(express.json());

var cors = require("cors");

app.use(cors());

const books = [
  { id: 1, name: "cacana", priority: 1, priorityName: "Urgent" },
  { id: 2, name: "babanaa", priority: 2, priorityName: "Regular" },
  { id: 3, name: "abanaa", priority: 3, priorityName: "Trivial" },
  { id: 4, name: "abanaab", priority: 1, priorityName: "Urgent" },
  { id: 5, name: "abanaac", priority: 2, priorityName: "Regular" },
  { id: 6, name: "abanaad", priority: 3, priorityName: "Trivial" },
  { id: 7, name: "abanaae", priority: 1, priorityName: "Urgent" },
];

app.get("/", (req, res) => {
  res.send("Welcome to Rise Api");
});

app.get("/api/jobs", (req, res) => {
  res.send(books);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
