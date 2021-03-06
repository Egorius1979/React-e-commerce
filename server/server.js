import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import axios from 'axios'

import cookieParser from 'cookie-parser'
import config from './config'
import Html from '../client/html'
// import next from 'next'

const { readFile, writeFile, unlink } = require('fs').promises

const Root = () => ''

try {
  // eslint-disable-next-line import/no-unresolved
  // ;(async () => {
  //   const items = await import('../dist/assets/js/root.bundle')
  //   console.log(JSON.stringify(items))

  //   Root = (props) => <items.Root {...props} />
  //   console.log(JSON.stringify(items.Root))
  // })()
  console.log(Root)
} catch (ex) {
  console.log(' run yarn build:prod to enable ssr')
}

let connections = []

const port = process.env.PORT || 8090
const server = express()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

async function write(logs) {
  return writeFile(`${__dirname}/logs.json`, JSON.stringify(logs), { encoding: 'utf8' })
}
const read = async () => {
  return readFile(`${__dirname}/logs.json`, { encoding: 'utf8' })
    .then((data) => JSON.parse(data))
    .catch(() => {
      const logs = []
      write(logs)
      return logs
    })
}

server.get('/api/v1/currencies', async (req, res) => {
  const { data: curr } = await axios('https://api.exchangeratesapi.io/latest')
  res.json(curr)
})

server.get('/api/v1/logs', async (req, res) => {
  const logs = await read()
  res.json(logs)
})

server.post('/api/v1/logs', async (req, res) => {
  const newLog = req.body
  const newLogs = await read()
  const date = +new Date()
  const newArray = [...newLogs, { date, action: newLog }]
  write(newArray)
  res.end()
})

server.delete('/api/v1/logs', async (req, res) => {
  await unlink(`${__dirname}/logs.json`)
  res.end()
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Skillcrucial - Become an IT HERO'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => {})

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)
