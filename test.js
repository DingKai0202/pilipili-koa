const fs = require('fs')
const path = require('path')
const vm = require('vm')

function Module(id) {
    this.id = id
    this.exports = {}
}

Module._resolveFilename = function (filename) {
    // 利用 Path 将filename 转为结对路径
    let absPath = path.resolve(__dirname, filename)

    // 判断当前路径对应的内容是否存在()
    if (fs.existsSync(absPath)) {
        // 如果条件成立则说明 absPath 对应的内容是存在的
        return absPath
    } else {
        // 文件定位
        let suffix = Object.keys(Module._extensions)
        for (let i = 0; i < suffix.length; i++) {
            let newPath = absPath + suffix[i];
            if (fs.existsSync(newPath)) {
                return newPath
            }
        }
    }
    throw new Error(`${filename} is not exists`)
}

Module._extensions = {
    '.js'(module) {
        // 读取
        let content = fs.readFileSync(module.id, 'utf-8')

        // 包装 字符串函数
        content = Module.wrapper[0] + content + Module.wrapper[1]
        console.log('包装函数', content);

        // VM
        let compileFn = vm.runInThisContext(content)

        console.log(compileFn);
        // 准备函数的参数值
        let exports = module.exports
        let dirname = path.dirname(module.id)
        let filename = module.id

        // 调用  改变 v.js 内部的this指向
        compileFn.call(exports, exports, myRequire, module, filename, dirname)
    },
    '.json'() {
        let content = JSON.parse(fs.readFileSync(module.id, 'utf-8'))

        module.exports = content;
    }
}

Module.wrapper = [
    "(function (exports, require, module, __filename, __dirname) {", "})"
]

Module._cache = {

}

Module.prototype.load = function () {
    let extname = path.extname(this.id)
    console.log(extname);

    Module._extensions[extname](this)
}

function myRequire(filename) {
    // 1.绝对路径
    let mPath = Module._resolveFilename(filename)
    console.log(mPath);

    // 2.缓存优先
    let cacheModule = Module._cache[mPath]
    if (cacheModule) return cacheModule.exports

    // 3.创建控对象加载目标对象
    let module = new Module(mPath)

    // 4.缓存已加载过的模块
    Module._cache[mPath] = module

    // 5. 执行加载(编译执行)
    module.load()

    // 6.返回数据
    return module.exports
}

let obj = myRequire('./v')
console.log(obj);