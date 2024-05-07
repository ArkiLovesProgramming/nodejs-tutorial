const fs = require('fs')

fs.appendFile('test.txt', '\nI love you forever!', e=>{
    if(e){
        console.log(e)
        return;
    }
    console.log("Append successfully!")
})