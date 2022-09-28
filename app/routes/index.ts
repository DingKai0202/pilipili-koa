const fs = require('fs');

module.exports = (app: any) => {
  console.log(fs.readdirSync(__dirname));
  
  (fs.readdirSync(__dirname)).forEach((file: any) => {
    console.log('文件', file);
    
    if (file === 'index.ts') { return; }
    const route = require(`./${file}`);
    app.use(route.routes()).use(route.allowedMethods());
  });
}