const router = require('express').Router();

const{chefControllers} = require('../controllers/chef');


router.get('/', chefControllers.getAllChefs);
router.post('/create', chefControllers.createNewChef);
router.put('/update/:id', chefControllers.updateChef);
router.delete('/delete/:id', chefControllers.deleteChef);

module.exports = router;