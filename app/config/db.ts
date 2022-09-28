// get the client
const mysql = require('mysql2');

let connection: any
reconn()

// 断线重连机制
function reconn() {
  // create the connection to database
  connection = mysql.createConnection({
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: '44512635',
    database: 'bilibili'
  });
  connection.on('error', (err: any) => {
      err.code === 'PROTOCOL_CONNECTION_LOST' && setTimeout(reconn, 2000)
  })
}

module.exports = connection
export {};