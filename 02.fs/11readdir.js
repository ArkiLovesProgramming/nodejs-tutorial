const { error } = require('console')
const fs = require('fs')

// 都出来的结果是文件夹内容中文件夹，文件名的数组
fs.readdir('../02.fs', (error, data)=>{
    if (error) throw error
    console.log(data)
})