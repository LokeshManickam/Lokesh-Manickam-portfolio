const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// 🔗 Connect MongoDB (do not crash server if DB fails)
connectDB();

// ✅ OPEN CORS FOR NOW (fixes GitHub Pages issue)
app.use(cors());

// 📦 Middleware
app.use(express.json());

// 🛣️ Routes
app.use("/api/contact", require("./routes/contactRoutes"));

// 🏠 Root route (check backend status)
app.get("/", (req, res) => {
  res.send("🚀 Portfolio Backend API is running");
});

// ❌ Catch unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// 🚀 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
