module.exports = (sequelize, DataTypes) => {
    const dishes = sequelize.define('dishes', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING
            },
            description: {
                type: DataTypes.STRING
            },
            menu_id: {
                type: DataTypes.INTEGER,
                foreignKey: true
            },
            price:{
                type: DataTypes.INTEGER,
            },
            currency:{
                type: DataTypes.STRING,
            },

        },
        {
            tableName: 'dishes',

        });


    return dishes
};