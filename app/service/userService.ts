const db = require('../model')
const Users = db.users

function findAllUser() {
  const data = Users.findAll()
  return data
}

module.exports = {
  findAllUser
}

export {}