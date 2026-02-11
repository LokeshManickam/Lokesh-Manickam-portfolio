const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// ✅ CORS FIX (VERY IMPORTANT)
app.use(cors({
  origin: [
    "https://lokesh-manicam-portfolio-wjoc.vercel.app"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

connectDB();

app.use("/api/contact", require("./routes/contactRoutes"));

app.get("/", (req, res) => {
  res.send("🚀 Portfolio Backend API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
