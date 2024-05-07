function timeout(value, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(value)}, ms);
    });
}
  
async function asyncPrint(value, ms) {
    const v = await timeout(value, ms);
    console.log(v);
}
  
asyncPrint('hello world', 2000);