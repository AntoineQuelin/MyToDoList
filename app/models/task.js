const {Model, DataTypes} = require('sequelize');
const database = require('../database');

class Task extends Model {}

Task.init ({
  name : {
    type : DataTypes.TEXT,
    allowNull : false
  },

  position : {
    type :DataTypes.NUMBER,
    allowNull : false,
    defaultValue : 0
},

  color : {
    type : DataTypes.TEXT,
    allowNull : false,
    defaultValue : '#FFFFFF'
  },

  finished : {
    type : DataTypes.BOOLEAN,
    allowNull : false,
    defaultValue : false
  }
}, {
    sequelize : database,
    tableName : 'task'
  }
)

module.exports = Task;