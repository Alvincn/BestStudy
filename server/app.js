// 导入 express 模块
const express = require('express');
// 创建 express 服务器实例
const app = express();
// 导入 cors 中间件
const cors = require('cors');
// 导入 路由模块
const userRouter = require('./router/user');

// 使用跨域中间件
app.use(cors());
// 配置解析 post 格式表单数据
app.use(express.urlencoded({ extended: false }));
// 使用userRouter模块，并且使用api前缀
app.use('/api', userRouter);

// 开启服务，使其运行在 8082端口
app.listen(8080, function () {
  console.log('server is running at http://127.0.0.1:8080');
});
