const Sequelize = require('sequelize');
const fs = require('fs');
const {resolve} = require('path');
const {config}  = require('../config/index');
module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
            host: config.DB_HOST,
            dialect: 'mysql',
            define: {
                timestamps: false
            }
        });

        let models = {};
        function  getModels() {
            fs.readdir('./dataBase/models', (err, files) => {
                files.forEach(file => {
                    const [modelName] = file.split('.');
                    models[modelName] = client.import (resolve(`./dataBase/models/${modelName}`))
                });
            });

        }


        return {
            getModel: modelName => models[modelName],
            setModels: () => getModels()

        };
    }

    return {
        getInstance: () => {
            if(!instance) instance = initConnection();
            return instance;
        }
    }
})();