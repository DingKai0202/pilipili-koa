const Router = require('koa-router');
const router = new Router({ prefix: '/user' });
const db = require('../model')
const Users = db.users

router.get('/', async (ctx: any) => {
  const data = await Users.findAll()
  ctx.body = {
    code: 200,
    msg: '测试接口',
    data
  }
})

module.exports = router;
export{}