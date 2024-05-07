const fs = require('fs')

// __dirname 和 require 一样是 nodejs 内部的全局变量，对于的是当前文件所在的文件的绝对路径
// 可以用来拼接路径
let data = fs.readFileSync(__dirname + '/14__dirname.js')

console.log(data.toString())