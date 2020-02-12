const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth');
const productCtrl = require('../controllers/product');


router.get('/', productCtrl.getAllProducts);
router.post('/', productCtrl.createProduct);
router.get('/:id', productCtrl.getOneProduct);
router.put('/:id', productCtrl.updateProduct);
router.delete('/:id', productCtrl.deleteProduct);

module.exports = router;