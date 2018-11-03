// 路由模块
const express = require('express')
const router = express.Router()

// 导入业务逻辑处理模块
const ctrl = require('./contraller.js')

// 测试模块
router.get('/', ctrl.textAPI)

// 对外暴露 getAllHero 接口
router.get('/getAllHero', ctrl.getAllHero)

// 对外暴露 addHero 接口
router.post('/addHero', ctrl.addHero)

// 对外暴露 getHeroById 接口
router.get('/getHeroById/:id', ctrl.getHeroById)

// 对外暴露 updateHeroById 接口
router.post('/updateHeroById/:id', ctrl.updateHeroById)

// 对外暴露 deleteHeroById 接口
router.get('/deleteHeroById/:id', ctrl.deleteHeroById)

module.exports = router