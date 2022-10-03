const dbserver = require('../dao/dbserver')

//登录
exports.signIn = (req, res) => {
  const {body} = req
  dbserver.signin(body, res)
}
