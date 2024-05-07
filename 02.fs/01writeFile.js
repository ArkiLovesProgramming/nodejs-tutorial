const fs = require('fs');
fs.writeFile('./test.txt', "I love programming!", err=>{
    if (err){
        console.log(err)
        return;
    }
    console.log("Wrote successfully!")
})

