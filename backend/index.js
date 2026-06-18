const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Schema
const leadSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  projectDetails: String,
  createdAt: { type: Date, default: Date.now }
});

const Lead = mongoose.model('Lead', leadSchema);

// Connect to MongoDB
// Note: We use a local connection string for development. 
// In production, this should be an environment variable.
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio_agency';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Email Transporter Configuration
let transporter;
nodemailer.createTestAccount().then(testAccount => {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.ethereal.email",
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || testAccount.user,
      pass: process.env.EMAIL_PASS || testAccount.pass,
    },
  });
  console.log("Email transporter ready.");
}).catch(err => console.error("Failed to create test account:", err));

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, projectDetails } = req.body;
    
    // Basic validation
    if (!firstName || !email) {
      return res.status(400).json({ error: 'First name and email are required.' });
    }

    const newLead = new Lead({ firstName, lastName, email, projectDetails });
    await newLead.save();

    // Send Admin Alert Email
    const adminMailOptions = {
      from: `"Portfolio System" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🚨 New Enquiry from ${firstName} ${lastName}`,
      text: `New lead received!\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nProject Details: ${projectDetails}\n\nLog in to MongoDB to view more details.`,
    };

    // Send Premium "Thank You" Email to Client
    const clientMailOptions = {
      from: `"Velmani M" <${process.env.EMAIL_USER}>`,
      to: email,
      replyTo: process.env.EMAIL_USER,
      subject: 'Thank You for Visiting Our Website.',
      text: `Dear Sir/Madam,\n\nThank you for visiting our website.\n\nWe sincerely appreciate your time and interest in our company and services. We hope you found the information helpful. If you have any questions or would like to discuss your requirements, please feel free to contact us.\n\nWe look forward to the opportunity to work with you.\n\nThank you once again.\n\nBest Regards,\nVelmani M`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 30px; border-radius: 12px; border: 1px solid #eaeaea; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1d1d1f; font-size: 24px; margin: 0; font-weight: 600; letter-spacing: -0.5px;">Velmani M</h1>
          </div>
          
          <div style="color: #333333; font-size: 16px; line-height: 1.6;">
            <p>Dear Sir/Madam,</p>
            <p>Thank you for visiting our website.</p>
            <p>We sincerely appreciate your time and interest in our company and services. We hope you found the information helpful. If you have any questions or would like to discuss your requirements, please feel free to contact us.</p>
            <p>We look forward to the opportunity to work with you.</p>
            <p>Thank you once again.</p>
            <br/>
            <p style="margin-bottom: 5px;">Best Regards,</p>
            <p style="margin-top: 0;"><strong>Velmani M</strong></p>
          </div>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eaeaea; text-align: center; color: #86868b; font-size: 12px;">
            <p>© ${new Date().getFullYear()} Velmani M. All rights reserved.</p>
          </div>
        </div>
      `
    };

    // Send emails asynchronously (do not block the response)
    Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions)
    ])
    .then((info) => {
      console.log('Admin Email Preview URL: %s', nodemailer.getTestMessageUrl(info[0]));
      console.log('Client Email Preview URL: %s', nodemailer.getTestMessageUrl(info[1]));
    })
    .catch(err => console.error('Email send error:', err));

    res.status(201).json({ message: 'Message received successfully!', leadId: newLead._id });
  } catch (error) {
    console.error('Error saving lead:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is running smoothly.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
