const express = require("express");
const authRoutes = require("./src/routes/authRoutes");
const { protect } = require("./src/controllers/authController");
const { sendNotification } = require("./src/utils/notificationUtils");
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

app.post("/items", (req, res) => {
  const item = new Item(req.body);
  item.save()
    .then((item) => {
      res.status(201).json({ message: "Item saved successfully", data: item });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error saving item" });
    });
});

const PORT = process.env.PORT || 3145;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});