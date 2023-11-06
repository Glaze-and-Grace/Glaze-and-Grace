const express = require('express');
const router = express.Router();
const middleware = require('../middleware/authorization');
const userProfileController = require('../Controllers/userProfileController');

router.get('/userInfo', middleware.authorize, userProfileController.information);
router.get('/wishlist', middleware.authorize, userProfileController.wishlist);
router.get('/history', middleware.authorize, userProfileController.history);
router.post('/addwishlist/:id', userProfileController.addtowishlist);
router.put('/edituser', middleware.authorize, userProfileController.editInformation);
router.put('/editwishlist', middleware.authorize, userProfileController.editWishlist);
// logout

module.exports = router;