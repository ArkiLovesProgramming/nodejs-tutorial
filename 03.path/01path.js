const path = require('path')

console.log(path.sep)

//常用
console.log(path.resolve(__dirname, '01path.js'))

// 解析路径
let pathname = '/Users/beita/Developer/vs-project/node.js/03.path/01path.js'
console.log(path.parse(pathname))

//获取路径基础名称
console.log(path.basename(pathname))
//获取路径的目录名
console.log(path.dirname(pathname));
//获取路径的扩展名
console.log(path.extname(pathname));

//__filename: 当前文件的绝对路径