// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

require('dotenv').config(); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

const Contact = mongoose.model("Contact", new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  state: String,
  gender: String,
  message: String
}));


app.post("/submit", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to submit" });
  }
});


app.listen(5000, () => console.log("Server started on port 5000"));
