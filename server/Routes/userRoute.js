const express = require('express');
const router = express.Router();
const usercontroller = require('../Controllers/usersController');
const middleware = require('../middleware/authorization');
const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.post('/register', usercontroller.register);
router.post('/login', usercontroller.login);
router.get('/protected', middleware.authorize, usercontroller.cont);
// router.post('logout');

module.exports = router;