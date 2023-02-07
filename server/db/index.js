// 导入mysql模块
const mysql = require('mysql');
// 创建链接对象
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'beststudy',
});
// 将数据库连接类共享出去
module.exports = db;
