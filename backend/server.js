const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// ✅ CORS FIX (VERY IMPORTANT)
const cors = require("cors");

app.use(cors({
  origin: [
    "https://lokeshmanickam.github.io"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
