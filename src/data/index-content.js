const pageTitle = 'My Page'

const pageHead = (pageName) => `
<head>
  <title>${pageName || pageTitle}</title>
</head>
`.trim()

const pageBody = (pageName) => `
<body>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>

  <main>
    <h1>My ${pageName} page</h1>
    <p>My page is awesome!</p>
  </main>
</body>
`.trim()

const content = (pageName) => `
<doctype html>
<html>
${pageHead(pageName)}
${pageBody(pageName)}
</html>
`

module.exports = {
  content
}
