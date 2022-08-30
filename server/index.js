const http = require('http')
const fs = require('fs')

const defaultOutputDir = 'output'

const server = http.createServer((req, res) => {
  const { url } = req
  let filePath = url === '/' ? `${defaultOutputDir}/index.html` : `${defaultOutputDir}/${url}.html`

  if (fs.existsSync(filePath)) {
    if (fs.lstatSync(filePath).isDirectory()) { filePath = null }
  } else { filePath = null }

  if (filePath === null) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<html><body>Not Found</body></html>');
  }

  // (B4) LOAD & SERVE FILE
  else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(fs.readFileSync(filePath));
  }

  // const file = fs.readFileSync(`output/${filePath}`, 'utf8')
  // res.end(file)
  res.end()
})

server.listen(3000, () => {
  console.log('Server listening on port 3000')
})
