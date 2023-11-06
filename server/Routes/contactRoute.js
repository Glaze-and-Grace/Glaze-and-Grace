const express = require('express');
const router = express.Router();

const contactController = require('../Controllers/contactController');

router.post('/contactus', contactController.postcontactus);
router.get('/getcontactus', contactController.getmessages);

module.exports = router;