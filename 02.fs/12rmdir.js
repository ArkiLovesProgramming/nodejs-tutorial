const fs = require('fs')

fs.rmdir('./page', {recursive: true}, err=>{
    if (err){
        console.log(err)
        return;
    }
    console.log("deleted dir")
})