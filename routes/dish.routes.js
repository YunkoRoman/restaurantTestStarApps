const router = require('express').Router();

const {dishController} = require('../controllers/dish');

router.post('/create', dishController.createNewDish);


module.exports = router;