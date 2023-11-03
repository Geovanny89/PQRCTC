const {DataTypes} = require('sequelize');
const sequelize = require('../database/db');



const Storages = sequelize.define('storages',{
    url:{
        type: DataTypes.STRING
    },
    filename: {
        type:DataTypes.STRING
    },
    

});


module.exports = Storages;