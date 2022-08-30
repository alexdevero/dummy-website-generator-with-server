/**
 * @param {string} pageName
 * @returns {string}
 */
const pageNameNormalizer = (pageName) => {
  if (pageName === 'home') {
    return 'index'
  }

  return pageName
}

module.exports = pageNameNormalizer
