module.exports = {
  HOST: 'rm-2zei9gil46e2bcb5dto.mysql.rds.aliyuncs.com',
  USER: 'ly',
  PASSWORD: 'LYly123456',
  DB: 'pilipili',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}