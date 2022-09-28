module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '44512635',
  DB: 'bilibili',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}