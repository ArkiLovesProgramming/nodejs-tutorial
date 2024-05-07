const express = require('express')
const monogoose = require('mongoose')
const config = require('./config/serverConfig')
const UserRouter = require('./router/UserRouter')
const bodyParser = require('body-parser')

const app = express()

// 重点：nodejs 的模块都是单例的，这样解释了为什么 springboot 要采用 bean 的单例模式，这是有设计思想的。
monogoose.connect(config.db.url)

monogoose.connection.on('open', ()=>{
    console.log("hello")
})

let jsonParser = bodyParser.json();
app.use(jsonParser)

app.use('/user', UserRouter)

app.listen(config.server.port, ()=>{
    console.log
})

