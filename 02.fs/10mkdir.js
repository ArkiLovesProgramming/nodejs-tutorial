const fs = require('fs')

// fs.mkdir('./page', err=>{
//     if (err) throw err
//     console.log('created dir')
// })

// recursive 创建
fs.mkdir('./page/a/b/c', {recursive: true},err=>{
    if (err) throw err
    console.log('created dir')
})