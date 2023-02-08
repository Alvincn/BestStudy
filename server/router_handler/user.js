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
  console.log(req.body);
  return res.send({ status: 200, state: 'success', message: '登录成功' });
};
// 获取邮箱验证码
exports.getCode = (req, res) => {
  console.log(req.headers.ismyapi);
  if (req.headers.ismyapi == 'chenboboYYDS') {
    let number = Math.floor(Math.random() * 990000 + 100000);
    let number1 = Math.floor((number * 8888) / 2588 - 3478 + 28888 * 349);
    console.log(number);
    return res.send({
      status: 200,
      state: 'success',
      message: '获取成功',
      data: number1,
    });
  } else {
    return res.send({
      status: 500,
      state: 'fail',
      message: '你没有权限访问该接口',
    });
  }
};
