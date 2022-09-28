
const dbConfig = require('../config/db.config')

const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// sequelize.sync({
//   force: false  // true 是清空数据库表
// })


sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error: any) => {
  console.error('Unable to connect to the database:', error);
})

const db: any = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./users.model.ts')(sequelize, Sequelize)

module.exports = db