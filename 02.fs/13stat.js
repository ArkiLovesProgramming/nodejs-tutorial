const fs = require('fs')

fs.stat('./13stat.js', (err, data)=>{
    if (err){
        console.log(err)
        return;
    }
    console.log(data)
})