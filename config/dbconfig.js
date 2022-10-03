/*
*       后台引用的所有 db.js 就是本文件 dbconfig.js
*       把本文件改成 db.js 即可
*
* */

var mongoose = require('mongoose')

// var db = mongoose.createConnection('mongodb://localhost:27017/NBDialect')
//连接   某数据库且带用户密码  的mongodb
var db = mongoose.createConnection('mongodb://root:ZXCzxc1234560@124.222.244.60:12121/NBDialect?authSource=admin')
db.on('error', console.error.bind(console, 'DB connection error'))
db.once('open', () => {
  console.info('数据库NBDialect打开成功')
})

module.exports = db
