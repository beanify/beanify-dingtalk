const Beanify = require('beanify')
const beanifyDingTalk = require('./index')

const beanify = Beanify({
  pino: {
    level: 'info',
    prettyPrint: true
  }
})

const appKey = 'dinge645rnkiswwo1sod'
const appSecret =
  'R4PTN76oXCKJMPI8KBoXMg0cB7MINx83Gj6qbsT3uE-eIKzNj-0NtoaLFihk_orG'

beanify.register(beanifyDingTalk, {
  appKey,
  appSecret
})

beanify.ready(e => {
  e && beanify.$log.error(e)
  beanify.print()
})
