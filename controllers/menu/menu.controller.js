const dataBase = require('../../dataBase').getInstance();

class menuController {

    async createMenu(req, res, next) {


        try {
            const {name} = req.body;
            const menuModel = dataBase.getModel('menus');
            const createNewMenu = await menuModel.create({
                name
            });

            res.json({
                success: true,
                msg: createNewMenu
            });
        } catch (e) {
            next(e);
            res.json({
                success: false,
                error: e
            });
        }
    }

    async getMenuWithDishes(req, res, next) {
        try {
            const menuModel = dataBase.getModel('menus');
            const dishesModel = dataBase.getModel('dishes');
            const {id} = req.params;

            const result = await menuModel.findOne({
                where: {
                    id
                },
                include:[{
                    model: dishesModel
                }]

            });
            res.json({
                success: true,
                msg: result
            });


        } catch (e) {
            next(e);
            res.json({
                success: false,
                error: e
            });
        }
    }
}

module.exports = new menuController();