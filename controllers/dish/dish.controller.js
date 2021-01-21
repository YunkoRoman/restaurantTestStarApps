const dataBase = require('../../dataBase').getInstance();


class dishController {

    async createNewDish(req, res, next) {

        try {
            const {name, description, menu_id, price, currency} = req.body;
            const dishModel =  dataBase.getModel('dishes');

            const createNewDish = await dishModel.create({
                name,
                description,
                menu_id,
                price,
                currency
            });
            res.json({
                success: true,
                msg: createNewDish
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


module.exports = new dishController();