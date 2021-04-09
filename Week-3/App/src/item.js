const {sequelize, DataTypes, Model} = require('../db');

class Item extends Model {

}

Item.init({
name:DataTypes.STRING, 
price:DataTypes.STRING,
}, {
    sequelize, 
    timestamps:false,
});


module.exports = {
    Item
};

