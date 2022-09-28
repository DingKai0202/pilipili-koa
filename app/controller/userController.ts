const { findAllUser } = require('../service/userService')


async function getAllUserCtl(ctx: any) {
  const data = await findAllUser()
  ctx.body = {
    code: 200,
    msg: '测试接口',
    data
  }
}

module.exports = {
  getAllUserCtl
}

export{}