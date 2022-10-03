const mongoose = require('mongoose');
const db = require('../config/db')
const Schema = mongoose.Schema

//用户表
const SchemaUser = new Schema({
  WXcode: {type: String}, //微信用户code
  openId: {type: String}, //微信用户唯一id（通过code查）
  nickName: {type: String}, //用户名
  avatarUrl: {type: String}, //头像链接
})

//发布信息表
const SchemaMessage = new Schema({
  openId: {type: String, ref:'User'}, //用户id
  audioPath: {type: String}, //语音链接
  audioExplain: {type: String}, //语音释义
  time: {type: Date}, //发送时间
  likeNum: {type: Number, default: 0}, //点赞数
})

module.exports = db.model('User',SchemaUser)
module.exports = db.model('Message',SchemaMessage)