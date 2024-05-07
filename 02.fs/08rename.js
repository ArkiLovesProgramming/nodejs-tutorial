const { error } = require('console')
const fs = require('fs')

fs.rename('./test.txt', './newTest.txt', error=>{
    if (error){
        console.log(error)
    }
    console.log("finished renaming!")
})

// sync 版本
//fs.renameSync('./座右铭.txt', './论语/我的座右铭.txt');