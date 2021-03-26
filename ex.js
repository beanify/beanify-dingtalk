const Beanify = require('beanify')
const beanifyEnv = require('beanify-env')

const beanifyDingTalk = require('./index')

const beanify = Beanify({
  pino: {
    level: 'info',
    prettyPrint: true
  }
})

beanify
  .register(beanifyEnv, {
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
  .after(() => {
    const { $env } = beanify
    beanify.register(beanifyDingTalk, {
      appKey: $env.DINGTALK_APPKEY,
      appSecret: $env.DINGTALK_APPSECRET
    })
  })

beanify.ready(e => {
  e && beanify.$log.error(e)
  beanify.$dingTalk.topapiIndustryOrganizationGet().then(data => {
    console.log({
      data
    })
  })
  beanify.print()
})
