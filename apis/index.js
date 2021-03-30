const path = require('path')
const fs = require('fs')

const apis = []
const files = fs.readdirSync(__dirname)

files.forEach(file => {
  // const fileType = path.extname(file)
  if (file === 'upcomingTasks.json') {
    const filePath = path.join(__dirname, file)
    const apiJson = require(filePath)
    if (apiJson && apiJson.length) {
      apis.push(...apiJson)
    }
  }
})

module.exports = apis
