/**
 * 此文件用于接口的统一管理
 */
import requests from './request';
// 用户登录接口
export const reqUserLogin = () => {
  requests({ url: '/login', method: 'post' });
};
