const http = require('http')

const server = http.createServer((request, response)=>{
    let {url, method} = request;
    response.setHeader("Content-Type", "text/html;charset=utf-8")
    if (url == "/register" && method == "GET"){
        response.end("Signup page")
    } else if (url == "/login" && method == "GET"){
        response.end("Login page")
    } else {
        response.end("<h1>404 NOT FOUND</h1>")
    }
})

server.listen(9002, ()=>{
    console.log('server started')
})