import path from 'path'
import http from 'http'
import express from 'express'
import compression from 'compression'

const app = express()
app.use(compression())

app.use('/', express.static(path.join(__dirname, '../../build')))

// Handle DirectLink
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build/index.html'))
})

const staticServer = http.createServer(app)

staticServer.listen(4328, () => {
  // eslint-disable-next-line no-console
  console.log('Static Server running on port 4328')
})
