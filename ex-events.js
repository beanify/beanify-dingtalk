const Smallify = require('smallify')

const smallifyEnv = require('smallify-env')
const smallifyDingTalk = require('./index')

const smallify = Smallify({
  pino: {
    level: 'info',
    prettyPrint: true
  }
})

smallify.register(smallifyEnv, {
  dotenv: true,
  schema: {
    type: 'object',
    properties: {
      DINGTALK_APPKEY: {
        type: 'string'
      },
      DINGTALK_APPSECRET: {
        type: 'string'
      }
    },
    required: ['DINGTALK_APPKEY', 'DINGTALK_APPSECRET']
  }
})

smallify.register(async function () {
  const { $env } = smallify
  smallify.register(smallifyDingTalk, {
    appKey: $env.DINGTALK_APPKEY,
    appSecret: $env.DINGTALK_APPSECRET
  })
})

smallify.register(async function () {
  console.log(smallify.$dingTalk)
})

smallify.route({
  url: '/dingtalk',
  method: 'POST',
  handler (req, rep) {
    console.log(req.body)
    console.log(req.query)
  }
})

smallify.route({
  url: '/',
  method: 'GET',
  handler (req, rep) {
    rep.send('hello world')
  }
})

smallify.ready(e => {
  e && smallify.$log.error(e)
  smallify.print()
})
