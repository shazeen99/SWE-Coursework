const {sequelize, DataTypes, Model} = require('../db');
const {Item} = require('./item.js');

class Menu extends Model {

}

Menu.init({
title:DataTypes.STRING, 
}, {
    sequelize, 
    timestamps:false,
});

Menu.hasMany(Item, {as:'items'})
Item.belongsTo(Menu)

module.exports = {
    Menu
};

