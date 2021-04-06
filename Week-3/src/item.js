const {sequelize, DataTypes, Model} = require('./sequelize_index.js');

class Item extends Model {

}

Item.init({
name:DataTypes.STRING, 
price:DataTypes.STRING,
menu_id:DataTypes.NUMBER,
}, {
    sequelize, 
    timestamps:false,
});


module.exports = {
    Item
};

