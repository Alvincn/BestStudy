/*
 * 此文件主要用于关于用户处理的一些模块
 */

// 注册用户处理函数
exports.reqUser = (req, res) => {
  const userInfo = req.body;
  if (!userInfo.username || !userInfo.password) {
    return res.send({ status: 201, state: 'error', message: '用户名和密码不能为空！' });
  }
};
// 登录处理函数
exports.login = (req, res) => {
  res.send('login ok');
};
