// 业务逻辑处理模块
const conn = require('./db.js')

module.exports = {
    // 测试 API 服务器能否被正常请求
    textAPI: (req, res) => {
        res.send('请求后台API接口成功!')
    },

    // 获取所有英雄列表
    getAllHero: (req, res) => {
        const sql = 'select * from heros'
        conn.query(sql, (err, result) => {
            if (err) res.status(500).send({
                status: 500,
                msg: err.message,
                data: null
            })
            res.send({
                status: 200,
                msg: 'ok',
                data: result
            })
        })
    },

    // 添加英雄
    addHero: (req, res) => {
        // 获取到客户提交到服务器的表单数据
        const hero = req.body
        const dt = new Date()

        const y = dt.getFullYear()
        const m = (dt.getMonth() + 1).toString().padStart(2, '0')
        const d = dt.getDate().toString().padStart(2, '0')
        const hh = dt.getHours().toString().padStart(2, '0')
        const mm = dt.getMinutes().toString().padStart(2, '0')
        const ss = dt.getSeconds().toString().padStart(2, '0')
        // 2018-11-02 12:12:12
        hero.ctime = `${y}-${m}-${d} ${hh}:${mm}:${ss}`

        const sql = 'insert into heros set ?'
        conn.query(sql, hero, (err, result) => {
            if (err) res.status(500).send({
                status: 500,
                msg: res.message,
                data: null
            })
            res.send({
                status: 200,
                msg: 'ok',
                data: null
            })
        })
    },

    // 根据id获取英雄信息
    getHeroById: (req, res) => {
        const id = req.params.id
        const sql = 'select * from heros where id = ?'
        conn.query(sql, id, (err, result) => {
            if (err) res.status(500).send({
                status: 500,
                msg: res.message,
                data: null
            })
            res.send({
                status: 200,
                msg: 'ok',
                data: result
            })
        })
    },

    // 根据id更新英雄信息
    updateHeroById: (req, res) => {
        const id = req.params.id
        const newInfo = req.body
        const sql = 'update heros set ? where id = ?'
        conn.query(sql, [newInfo, id], (err, result) => {
            if (err) res.status(500).send({
                status: 500,
                msg: res.message,
                data: null
            })
            res.send({
                status: 200,
                msg: 'ok',
                data: null
            })
        })
    },

    // 根据id删除英雄信息
    deleteHeroById: (req, res) => {
        const id = req.params.id
        const sql = 'update heros set isdel = 1 where id = ?'
        conn.query(sql, id, (err, result) => {
            if (err) res.status(500).send({
                status: 500,
                msg: res.message,
                data: null
            })
            res.send({
                status: 200,
                msg: 'ok',
                data: null
            })
        })
    }
}