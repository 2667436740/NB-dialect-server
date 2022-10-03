const signin = require('../server/signin')

module.exports = function (app) {
  app.get('/aabb', (req, res) => {
    res.send({
      data: 'aabb!',
      status: 200
    })
  })

  //--------登陆页面
  //登录
  app.post('/signin', (req, res) => {
    signin.signIn(req, res)
  })
}