import express from 'express'
import path from 'path'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Layout } from './components/Layout'

const app = express()

app.use(express.static(path.resolve(__dirname, '../dist')))

app.get('/*', (req, res) => {
  const jsx = (<Layout />)
  const reactDom = renderToString(jsx)

  res.writeHead(200, {
    'content-type': 'text/html'
  })
  res.end(htmlTemplate(reactDom))
})

app.listen(2048)

const htmlTemplate = reactDom => `
<!DOCTYPE html>
  <html>
    <head>
      <meta charSet='utf-8'></meta>
      <title>React SSR</title>
    </head>

    <body>
      <main>${reactDom}</main>
      <script src='../app.bundle.js'></script>
    </body>
  </html>
`
