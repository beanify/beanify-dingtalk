const LruCache = require('lru-cache')
const { default: axios } = require('axios')
const { camelCase } = require('camel-case')

const cache = new LruCache({ maxAge: 7200 })
const baseURL = 'https://oapi.dingtalk.com'

const apis = [
  {
    url: '/auth/scopes',
    method: 'GET'
  }
]

function DingTalk (opts) {
  this.$options = opts
}

DingTalk.prototype.gettoken = function () {
  return new Promise((resolve, reject) => {
    const key = 'access_token'
    const token = cache.get(key)
    if (token) {
      return resolve(token)
    }

    const { appKey, appSecret } = this.$options
    axios
      .get('/gettoken', {
        baseURL,
        params: { appkey: appKey, appsecret: appSecret }
      })
      .then(({ data }) => {
        cache.set(key, data.access_token, data.expires_in)
        return data.access_token
      })
      .then(resolve)
      .catch(reject)
  })
}

DingTalk.prototype.post = function (url, data) {
  return new Promise((resolve, reject) => {
    this.gettoken()
      .then(async token => {
        const result = axios.post(url, data, {
          baseURL,
          params: {
            access_token: token
          }
        })
        return result.data
      })
      .then(resolve)
      .catch(reject)
  })
}

DingTalk.prototype.get = function (url) {
  return new Promise((resolve, reject) => {
    this.gettoken()
      .then(async token => {
        const result = await axios.get(url, {
          baseURL,
          params: {
            access_token: token
          }
        })

        return result.data
      })
      .then(resolve)
      .catch(reject)
  })
}

module.exports = async function (beanify, opts) {
  opts.importApis = opts.importApis || []
  opts.maxAge = opts.maxAge || 7200

  const dingTalk = new DingTalk(opts)

  const exportApis = [...apis, ...opts.importApis]

  exportApis.forEach(api => {
    const { url, method = 'GET' } = api
    dingTalk[camelCase(url)] = function (...args) {
      return dingTalk[method.toLowerCase()](api.url, ...args)
    }
  })

  beanify.decorate('$dingTalk', dingTalk)
  console.log(dingTalk)
}
