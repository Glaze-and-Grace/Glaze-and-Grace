const express = require('express');
const router = express.Router();
const shoppingController = require('../Controllers/shoppingController');
const middleware = require('../middleware/authorization');

router.post('/addtocart/:id',shoppingController.addtocart);
router.get('/shoppingcart',shoppingController.getcartproducts);
router.get('/shoppingcart/totalprice', shoppingController.totalprice);
router.delete('/product/delete/:id', shoppingController.deleteproduct);
router.put('/product/update/:id', shoppingController.updateproduct);
router.post('/shoppingcart/checkout', shoppingController.createCheckoutSession);

module.exports = router;