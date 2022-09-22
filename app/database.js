const { Sequelize } = require ('sequelize');

const sequelize = new Sequelize("postgresql://juvenus2:juvenus2@localhost/todolist2", {
  define : {
    underscored : true
  }
})

module.exports = sequelize;