const Router = require('koa-router');
const router = new Router({ prefix: '/user' });
const { getAllUserCtl } = require('../controller/userController');

// router.get('/', async (ctx: any) => {
//   const data = await Users.findAll()
//   ctx.body = {
//     code: 200,
//     msg: '测试接口',
//     data
//   }
// })

router.get('/', getAllUserCtl)

module.exports = router;
export{}