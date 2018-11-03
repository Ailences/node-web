const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// 注册 body-parser 中间件 ,解析post提交过来的表单数据
app.use(bodyParser.urlencoded({
    extended: false
}))


// 监听客户端的get请求
app.get('/user', (req, res) => {
    console.log(req.query)
    res.send('ok')
})

// URL规则中的 : 表示参数项 
app.get('/user/:id/:name', (req, res) => {
    console.log(req.params);
    res.send('ok')
})

// 监听客户端post请求
app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('ok')
})

app.listen(3000, () => {
    console.log('server running at http://127.0.0.1:3000');
})