const express = require('express');
// 创建路由对象
const router = express.Router();
// 引入用户处理模块
const userHandler = require('../router_handler/user');

// 注册新用户
router.post('/register', userHandler.reqUser);
//登录
router.post('/login', userHandler.login);
// 将此文件暴露出去
module.exports = router;
