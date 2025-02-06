const express = require("express");
const db = require('./db')
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task Manager API is running");
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("❌ Error inserting data:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(201).json({ message: "User registered successfully", userId: result.insertId });
  });
});


app.get("/login", (req, res) => {
  res.send("Task Manager API is running");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
