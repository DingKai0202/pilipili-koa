// get the client
const mysql = require('mysql2');

let connection: any
reconn()

// 断线重连机制
function reconn() {
  // create the connection to database
  connection = mysql.createConnection({
    host: 'rm-2zei9gil46e2bcb5dto.mysql.rds.aliyuncs.com',
    post: 3306,
    user: 'ly',
    password: 'LYly123456',
    database: 'pilipili'
  });
  connection.on('error', (err: any) => {
    err.code === 'PROTOCOL_CONNECTION_LOST' && setTimeout(reconn, 2000)
  })
}

module.exports = connection
export { };