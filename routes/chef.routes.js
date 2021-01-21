const router = require('express').Router();

const{chefControllers} = require('../controllers/chef');


router.get('/', chefControllers.getAllChefs);
router.post('/create', chefControllers.createNewChef);

module.exports = router;