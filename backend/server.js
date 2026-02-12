const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// 🔗 Connect to MongoDB
connectDB();

// ✅ CORRECT CORS (domain only)
app.use(cors({
  origin: "https://lokeshmanickam.github.io",
  methods: ["GET", "POST"],
  credentials: true
}));

// 📦 Middleware to parse JSON
app.use(express.json());

// 🛣️ Routes
app.use("/api/contact", require("./routes/contactRoutes"));

// 🏠 Root route
app.get("/", (req, res) => {
  res.send("🚀 Portfolio Backend API is running");
});

// 🚀 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
