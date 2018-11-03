const express = require('express')
const app = express()


// 注册 body-parser 中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
}))

// 在API 服务器端 启用 CORS 跨域资源共享
const cors = require('cors')
app.use(cors())

// 导入路由模块
const router = require('./router.js')
// 注册路由模块
app.use(router)


// 让后台项目运行在 5000 端口
app.listen(5000, () => {
    console.log('server runnung at http://127.0.0.1:5000');
})