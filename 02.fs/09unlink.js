const fs = require('fs')

fs.unlink('./newTest.txt', err=>{
    if (err) throw err;
    console.log('删除成功');
})

// sync
// fs.unlinkSync('./test2.txt');