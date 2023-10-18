const express = require('express');
const router = express.Router();
const mailController = require('../controllers/mailController');

// Send email form
router.get('/send-mail', mailController.mailForm); // Change this route to /send-email

// Handle email sending
router.post('/send-mail', mailController.sendMail);

module.exports = router;
