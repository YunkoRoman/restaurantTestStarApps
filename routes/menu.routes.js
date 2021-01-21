const router = require('express').Router();

const {menuController} = require('../controllers/menu')

router.post("/create", menuController.createMenu);
router.get("/getMenuWithDishes/:id", menuController.getMenuWithDishes);

module.exports = router;