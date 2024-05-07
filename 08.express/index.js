const express =require('express')
const bodyParser = require('body-parser');
const homeRouter = require("./router/homeRouter")

const app = express()

// nodejs 中 middleware 严格按照顺序执行，记住路由注册不是中间件，是异步的执行... 所以你就算路由注册放在前面，一样可以用 mongoose 的连接。
let recordMiddleware = function (req, res, next){
    console.log("I am a middleware")
    next()
}

app.use(recordMiddleware)
// 中间件处理静态资源
app.use(express.static('./public'))
app.use(homeRouter)


app.get('/home', (request, response)=>{
    response.end("hello, express!");
})

app.get('/user/:id', (request, response)=>{
    console.log(request.params.id)
    // ? 里面的参数是 query 参数
    console.log(request.query)  // 在原生 http 中需要导入 url 才能解析出来，express 帮我们封装了
    console.log(request.get("Cookie"))  // 原生中只能先获取 headers 然后再取
    response.end("hello, user!");
})

//获取请求的路由规则
app.get("/response", (req, res) => {
    // 1. express 中设置响应的方式兼容 HTTP 模块的方式
    // res.statusCode = 404;
    // res.statusMessage = 'xxx';
    // res.setHeader('abc', 'xyz');
    // res.setHeader('Content-Type', 'text/html;charset=utf-8');
    // res.write('响应体');
    // res.end('xxx');

    // 2. express 的响应方法
    // res.status(500); //设置响应状态码
    // res.set('xxx', 'yyy');//设置响应头
    // res.send('中文响应不乱码');//设置响应体

    // 2.1连贯操作
    // res.status(404).set('xxx', 'yyy').send('你好朋友')

    // //3. 其他响应
    // res.redirect('http://atguigu.com')//重定向
    
    // res.download('./package.json');//下载响应

    // res.json(JSON.stringify('{"name": "arki"}}'));//响应 JSON

    res.sendFile(__dirname + '/index.js') //响应文件内容
});

//处理 querystring 格式的请求体 //application/x-www-form-urlencoded
let urlParser = bodyParser.urlencoded({ extended: false });
//处理 JSON 格式的请求体
let jsonParser = bodyParser.json();

app.post('/login', urlParser, (request, response) => {
    //获取请求体数据
    console.log(request.body);
    //用户名
    console.log(request.body.username);
    //密码
    console.log(request.body.password);
    response.send('获取请求体数据');
});

app.listen(9002, ()=>{
    console.log("server started, port is 9002")
})