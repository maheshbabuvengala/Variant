import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import nodemailer from "nodemailer";

// env.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Define Mongoose Schema
const contactSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  email: String,
  pickupDate: Date,
  interest: String,
  location: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "maheshvengala4321@gmail.com", // Your email
    pass: "bsig sshe ssju chin", // Your email password
  },
});

// API Route to handle form submissions
app.post("/api/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: req.body.email, // Send to user email
      subject: "Form Submission Received",
      text: `Hello ${req.body.fullName},\n\nThank you for your interest! We have received your details and will contact you soon.\n\nBest Regards,\nYour Team`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));