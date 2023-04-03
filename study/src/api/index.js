/**
 * 此文件用于接口的统一管理
 */

import { Get, Post, Put, Patch, Delete } from '@/api/request';
// 用户登录接口
export default {
  // 登录
  Login: (user) => {
    return Post('/login', user);
  },
  // 注册
  Register: (user) => {
    return Post('/register', user);
  },
  // 获取邮箱验证码
  getCode: () => {
    return Post('/getCode');
  },
};
