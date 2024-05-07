const fs = require('fs')


// 这样就不用多一个静态资源就写一个判断方法了，集中处理静态资源的相应
require('http').createServer((request, response) => {
    //获取请求的方法已经路径
    let { url, method } = request;
    //文件夹路径
    let rootDir = __dirname + '/public';
    //拼接文件路径
    let filePath = rootDir + url;
    //读取文件内容
    fs.readFile(filePath, (err, data) => {
        //判断
        if (err) {
            //如果出现错误，响应404状态码
            response.statusCode = 404;
            response.end('<h1>404 Not Found</h1>');
        } else {
            //响应文件内容
            response.end(data);
        }
    })
}).listen(9002, () => {
    console.log('9002端口正在启动中....');
});