// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

app.use(express.static('./views'))
app.use('./semantic',express.static('./semantic'))
app.use('/node_modules', express.static('./node_modules'))

app.listen(3000, () => {
    console.log('Express server running at http://127.0.0.1:3000');
})