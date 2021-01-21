const dataBase = require('../../dataBase').getInstance();



class chefControllers {
    async getAllChefs(req, res, next) {

        try {
            const chefModel = dataBase.getModel('chefs');

            const getAllChefs = await chefModel.findAll();


            res.json({
                success: true,
                msg: getAllChefs
            });

        } catch (e) {
            next(e);
            res.json({
                success: false,
                error: e
            });
        }
    }


    async createNewChef(req, res, next) {
        try {
            const {name, surname, yearOfExperience} = req.body;
            const chefModel = dataBase.getModel('chefs');
            const createChef = await chefModel.create({
                name,
                surname,
                yearOfExperience
            });

            res.json({
                success: true,
                msg: createChef
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

module.exports = new chefControllers();

