const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  description: {
    type: String,
  },
});

itemSchema.virtual("expired").get(function () {
  return this.expiryDate < Date.now();
});
