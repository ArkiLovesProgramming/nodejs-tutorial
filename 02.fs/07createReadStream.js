const fs = require('fs')

let rs = fs.createReadStream('video1.mp4');

// rs.on('data', data=>{
//     // console.log(data.toString())
//     console.log(data.length);
// })

// rs.on('end', ()=>{
//     console.log('Finished reading')
// })

// 修改 buffer 的大小
// java 中可以通过 fileInputStream + BufferInputStream 达到相同的效果
let rs2 = fs.createReadStream('video1.mp4', { highWaterMark: 1024 });

rs2.on('data', data=>{
    // console.log(data.toString())
    console.log(data.length);
})

rs2.on('end', ()=>{
    console.log('Finished reading')
})