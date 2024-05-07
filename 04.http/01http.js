const http = require('http')
// 用来解析 params query 参数从 url 中
// const url = require('url')


const server = http.createServer((req, res)=>{
    // 获取请求报文信息
    let result = {
        method: req.method,
        httpVersion: req.httpVersion,
        url: req.url,
        pathname: require('url').parse(req.url).pathname,
        query: require('url').parse(req.url, true).query,
        Headers: req.headers,
    }
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.write(JSON.stringify(result))
    // res.end('Hello HTTP Server，嗨，你好吗？')
})

server.listen(9002, ()=>{
    console.log('Server started, port being listened...');
})