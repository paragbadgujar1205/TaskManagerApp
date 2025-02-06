const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task Manager API is running");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
