const express = require("express");
const db = require('./db');
const cors = require("cors"); 
const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:3000", // Allow requests from frontend
  methods: ["GET", "POST"], // Allowed HTTP methods
  credentials: true // Allow cookies if needed
}));


app.get("/", (req, res) => {
  res.send("Task Manager API is running");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Name, Email and password are required" });
  }

  const sql = "INSERT INTO users (email, password, name) VALUES (?, ?, ?)";
  db.query(sql, [email, password, name], (err, result) => {
    if (err) {
      console.error("❌ Error inserting data:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(201).json({ message: "User registered successfully", userId: result.insertId });
  });
});


app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error("❌ Database query error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length > 0) {
      res.status(200).json({ message: "Login successful", user: results[0] });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  });
});


app.listen(5000, () => {
  console.log("Server started on port 5000");
});
