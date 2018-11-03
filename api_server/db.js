// 数据库模块 只负责连接数据库

// 导入 mysql 模块
const mysql = require('mysql')
// 创建数据库连接
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'users'
})

module.exports = conn