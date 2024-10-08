const express = require("express");
const authRoutes = require("./src/routes/authRoutes");
const { protect } = require("./src/controllers/authController");
const { sendNotification } = require("./src/utils/notificationUtils");
const User = require("./src/models/userModel");
const Item = require("./src/models/itemModel");

const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.get("/dashboard", protect, (req, res) => {
  res.json({
    message: `Hello ${req.user.username}, welcome to your dashboard!`,
  });
});

app.post("/subscribe", (req, res) => {
  const subscription = req.body;
  res.status(201).json({ message: "Subscription saved" });
  const payload = JSON.stringify({ title: "Push Test" });
  sendNotification(subscription, payload).catch((err) => console.error(err));
});

// Backend Logic to store and manage items under specific user's documents
app.post("/items", protect, async (req, res) => {
  const item = req.body;
  if (!req.user.items) {
    req.user.items = [];
  }
  req.user.items.push(item);
  await req.user.save();
  res.status(201).json({ message: "Item saved successfully", data: req.user.items });
});

app.get("/items", protect, async (req, res) => {
  let data = req.user.items;
  if(req.query.filterDate != "") {
    data = data.filter(item => item.expiryDate == req.query.filterDate);
  }
  res.json({
    message: "Items retrieved successfully",
    data: data
  });
});

app.get("/items/:name", protect, async (req, res) => {
  const name = req.params.name;
  const item = req.user.items.find((item) => item.name === name);
  if (!item) {
    res.status(404).json({ message: "Item not found" });
  } else {
    res.json({ message: "Item retrieved successfully", data: item });
  }
});

app.put("/items/:name", protect, async (req, res) => {
  const name = req.params.name;
  const updatedItem = req.body;
  const item = req.user.items.find((item) => item.name === name);
  if (!item) {
    res.status(404).json({ message: "Item not found" });
  } else {
    Object.assign(item, updatedItem);
    await req.user.save();
    res.json({ message: "Item updated successfully", data: item });
  }
});

app.delete("/items/:name", protect, async (req, res) => {
  const name = req.params.name;
  const item = req.user.items.find((item) => item.name === name);
  if (!item) {
    res.status(404).json({ message: "Item not found" });
  } else {
    req.user.items.pull(item);
    await req.user.save();
    res.json({ message: "Item deleted successfully" });
  }
});

const PORT = process.env.PORT || 3145;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});