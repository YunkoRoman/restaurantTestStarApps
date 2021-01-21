module.exports = (sequelize, DataTypes) => {
    const menus = sequelize.define('menus', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },

    }, {
        tableName: 'menus',
    });
    const dish = sequelize.import('./dishes.js');
    menus.hasMany(dish, {foreignKey: 'menu_id'});

    return menus
};