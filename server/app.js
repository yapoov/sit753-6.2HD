const express = require('express');
const authRoutes = require('./src/routes/authRoutes');
const {protect} = require("./src/controllers/authController")

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);


app.get('/dashboard', protect, (req, res) => {
    res.json({ message: `Hello ${req.user.username}, welcome to your dashboard!` });
});

const PORT = process.env.PORT || 3145;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
