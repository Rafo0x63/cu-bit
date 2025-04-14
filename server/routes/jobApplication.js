const express = require('express');
const router = express.Router();
const multer = require('multer');
const nodemailer = require('nodemailer');
const fs = require('fs');

const upload = multer({ dest: 'uploads/' });

router.post(
  '/',
  upload.fields([{ name: 'cv' }, { name: 'cover-letter' }]),
  async (req, res) => {
    try {
      const { name, surname, email, phone, aboutMe, social, from } = req.body;
      const cv = req.files['cv']?.[0];
      const coverLetter = req.files['cover-letter']?.[0];

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'cubit.agency@gmail.com',
          pass: 'xrogkdoxosdyklky',
        },
      });

      const mailOptions = {
        from: 'cubit.agency@gmail.com',
        to: 'antonio.rafajec@gmail.com',
        subject: 'New Job Application',
        text: `
            Name: ${name} ${surname}
            Email: ${email}
            Phone: ${phone}
            About Me: ${aboutMe || ''}
            Social: ${social || ''}
            Heard From: ${from || ''}
        `,
        attachments: [
          ...(cv ? [{ filename: cv.originalname, path: cv.path }] : []),
          ...(coverLetter ? [{ filename: coverLetter.originalname, path: coverLetter.path }] : []),
        ],
      };

      await transporter.sendMail(mailOptions);

      if (cv) fs.unlinkSync(cv.path);
      if (coverLetter) fs.unlinkSync(coverLetter.path);

      res.status(200).json({ message: 'Application sent successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to process application' });
    }
  }
);

module.exports = router;
