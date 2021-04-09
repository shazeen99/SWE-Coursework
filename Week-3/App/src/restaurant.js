const { Menu } = require('./menu.js');
const {sequelize, DataTypes, Model} = require('../db');

class Restaurant extends Model {

}

Restaurant.init({
name:DataTypes.STRING, 
image:DataTypes.STRING,
}, {
    sequelize, 
    timestamps:false,
});

Restaurant.hasMany(Menu, {as:'menus'})
Menu.belongsTo(Restaurant)

module.exports = {
    Restaurant
};

