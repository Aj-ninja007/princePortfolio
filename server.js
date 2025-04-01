// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// require('dotenv').config();  // For environment variables (use for email credentials)

// const app = express();
// const port = 5000;

// // Enable CORS for React frontend
// app.use(cors());

// // Middleware to parse incoming JSON data
// app.use(bodyParser.json());

// // Handle form submission from frontend
// app.post('/submit', (req, res) => {
//   const { name, email, message } = req.body;

//   // Create a Nodemailer transporter to send emails
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',  // You can use any email provider here
//     auth: {
//       user: process.env.EMAIL_USER,  // Use your email (from .env file)
//       pass: process.env.EMAIL_PASS,  // Use your email password (from .env file)
//     },
//   });

//   // Email data
//   let mailOptions = {
//     from: email,  // Sender's email (from the form)
//     to: process.env.EMAIL_USER,  // Your email (receiver)
//     subject: 'New Contact Form Submission',
//     text: `Message from: ${name} (${email})\n\n${message}`,  // The actual message
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).json({ message: 'Error sending email', error });
//     }
//     res.status(200).json({ message: 'Email sent successfully!' });  // Successful response
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });



const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();  // For environment variables (use for email credentials)

const app = express();
const port = 5000;

// Enable CORS for React frontend
app.use(cors());

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Handle form submission from frontend
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter to send emails
  let transporter = nodemailer.createTransport({
    service: 'gmail',  // You can use any email provider here
    auth: {
      user: process.env.EMAIL_USER,  // Use your email (from .env file)
      pass: process.env.EMAIL_PASS,  // Use your email password (from .env file)
    },
  });

  // Email data
  let mailOptions = {
    from: email,  // Sender's email (from the form)
    to: process.env.EMAIL_USER,  // Your email (receiver)
    subject: 'New Contact Form Submission',
    text: `Message from: ${name} (${email})\n\n${message}`,  // The actual message
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email', error });
    }
    res.status(200).json({ message: 'Email sent successfully!' });  // Successful response
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
