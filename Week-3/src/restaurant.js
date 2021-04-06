const { Menu } = require('./menu.js');
const {sequelize, DataTypes, Model} = require('./sequelize_index.js');

class Restaurant extends Model {

}

Restaurant.init({
name:DataTypes.STRING, 
imageURL:DataTypes.STRING,
city:DataTypes.STRING,
}, {
    sequelize, 
    timestamps:false,
});

Restaurant.hasMany(Menu, {as:'menus'})
Menu.belongsTo(Restaurant)

module.exports = {
    Restaurant
};

