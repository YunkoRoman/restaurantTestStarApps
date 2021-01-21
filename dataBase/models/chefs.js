module.exports = (sequelize, DataTypes) => {
    const chefs = sequelize.define('chefs', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            surname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            yearOfExperience: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'chefs',

        });


    return chefs
};