const pageTitle = 'My Page'

const pageHead = (pageName: string): string => `
<head>
  <title>${pageName || pageTitle}</title>
</head>
`.trim()

const pageBody = (pageName: string): string => `
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

export const content = (pageName: string): string => `
<doctype html>
<html>
${pageHead(pageName)}
${pageBody(pageName)}
</html>
`
