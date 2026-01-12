const express = require("express");
const app = express();

app.use(express.json());

// Dummy data
let users = [
  { id: 1, name: "Karan", role: "Developer" },
  { id: 2, name: "Amit", role: "Tester" }
];

// Health Check API
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "Server is running fine",
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

// GET all users
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users
  });
});

// POST create user
app.post("/users", (req, res) => {
  const { name, role } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
    role
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser
  });
});

// Root
app.get("/", (req, res) => {
  res.send("Node.js GET, POST & Health APIs are running");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Listening on", PORT));
