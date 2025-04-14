const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const multer = require('multer')

const upload = multer();

router.post(
  '/',
  upload.none(),
  async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'cubit.agency@gmail.com',
          pass: 'xrogkdoxosdyklky',
        },
      });

      const mailOptions = {
        from: 'cubit.agency@gmail.com',
        to: 'info@cu-bit.com',
        subject: 'Inquiry',
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        `
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Message sent successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to process message' });
    }
  }
);

module.exports = router;