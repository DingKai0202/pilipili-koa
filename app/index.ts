const Koa =  require("koa")
const bodyparser = require("koa-body")
const connection = require('./config/db')

const app:any = new Koa()

const routing = require('./routes/index')

connection.connect((err: any) => {
  if(err){
    console.log("Connection error: ", err);
  }
});

app.use(bodyparser())

routing(app)

app.listen(4005, () => {
  console.log('项目运行在 4005 端口');
})

module.exports = Koa