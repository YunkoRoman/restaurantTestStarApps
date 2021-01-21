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
    async updateChef(req, res, next){
        try {
            const {id} = req.params;
            console.log(id);
            console.log(req.body);
            const {name, surname, yearOfExperience} = req.body;
            const chefModel = dataBase.getModel('chefs');

            const result = await chefModel.update( {
                name, surname, yearOfExperience
            },{
                where: {
                    id
                }
            });

            res.json({
                success: true,
                msg: result
            });
        }catch (e) {
            next(e);
            res.json({
                success: false,
                error: e
            });
        }
    }

    async deleteChef(req, res, next){
        try {
            const {id} = req.params;

            const chefModel = dataBase.getModel('chefs');

            const result = await chefModel.destroy({
                where: {
                    id
                }
            });

            res.json({
                success: true,
                msg: result
            });
        }catch (e) {
            next(e);
            res.json({
                success: false,
                error: e
            });
        }
    }
}

module.exports = new chefControllers();

