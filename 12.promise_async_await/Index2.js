// 测试
// 但是如果 async 函数体外面的操作需要用到 async 函数的返回值怎么办 (因为 async 函数内部遇到 await 就暂停去执行外面了)？

async function fetch(){
    let data = await new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve("我是数据")}, 3000)
    })
    console.log(data)
    return data
}

console.log(fetch())
console.log("我在 async 函数外面")