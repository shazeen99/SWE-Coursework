const {sequelize, DataTypes, Model} = require('./sequelize_index.js');
const {Item} = require('./item.js');

class Menu extends Model {

}

Menu.init({
title:DataTypes.STRING, 
icon:DataTypes.STRING,
res_id:DataTypes.NUMBER,
}, {
    sequelize, 
    timestamps:false,
});

Menu.hasMany(Item, {as:'items'})
Item.belongsTo(Menu)

module.exports = {
    Menu
};

