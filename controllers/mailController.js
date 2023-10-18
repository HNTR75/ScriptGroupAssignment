// controllers/mailController.js
const nodemailer = require('nodemailer');

exports.mailForm = (req, res) => {
    res.render('send-mail'); // Render the email form
};

exports.sendMail = (req, res) => {
    const recipient = req.body.recipient;
    const subject = req.body.subject;
    const message = req.body.message;
  
    const smtpTransport = {
      service: 'Gmail',
      auth: {
        user: 'pyromianhunter@gmail.com', // Update with your Gmail credentials
        pass: 'xxkx axpt gshc kmmi', // Update with your Gmail password
      },
    };
  
    const transporter = nodemailer.createTransport(smtpTransport);
  
    const mailOptions = {
      from: 'pyromianhunter@gmail.com',
      to: recipient,
      subject: subject,
      text: message,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Email not sent. Error Occurs.');
      } else {
        console.log('Email sent successfully');
        res.redirect('/send-mail');
      }
    });
  };