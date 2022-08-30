const fs = require('fs')

const { content } = require('./../data/index-content')
const pages = require('./../data/pages')
const camelCase = require('./../utils/string-utils')
const pageNameNormalizer = require('./../utils/page-name-normalizer')

const generatePages = () => {
  pages.forEach(page => {
    fs.writeFile(`output/${pageNameNormalizer(page)}.html`, content(camelCase(page)), function(err, file) {
      if (err) throw err
      console.log(`Created ${pageNameNormalizer(page)}.html`)
    })
  })
}

module.exports = generatePages
