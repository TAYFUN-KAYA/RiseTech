const express = require("express");
const app = express();
app.use(express.json());

var cors = require("cors");

app.use(cors());

const jobs = [
  {
    id: 1,
    name: "Adaylarla ilgili teknik bir ödev hazırlamam gerekiyor",
    priority: 1,
    priorityName: "Urgent",
  },
  {
    id: 2,
    name: "Yapılan işlerle ilgili activity kayitlari olusturmam gerekiyor",
    priority: 2,
    priorityName: "Regular",
  },
  {
    id: 3,
    name: "Teknik tasklari planlayacagim",
    priority: 3,
    priorityName: "Trivial",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to Rise Api");
});

app.get("/api/jobs", (req, res) => {
  res.send(jobs);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
