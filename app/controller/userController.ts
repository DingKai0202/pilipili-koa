const db = require('../model')
const Users = db.users


exports.list = async(ctx: any) => {
  console.log('数据库00');
  Users.findAll().then((data: any) => {
    console.log('数据库', data);
    ctx.body({
      code: 200,
      data: data,
    })
  })
  .catch((err: any) => {
    throw err
  })
}

export{}