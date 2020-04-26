import express from 'express'
import dotenv from 'dotenv'
import http from 'http'
import consola from 'signale'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'

import config from './config'
import connectDB from './config/db'
import logger from './middleware/logger'
import errorHandler from './middleware/error'
import routing from './routing'

dotenv.config()

const app = express()
const httpServer = http.createServer(app)
const PORT = process.env.PORT 

app.disable('x-powered-by')
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(logger)

/** Routes */

app.use('/',  routing)


/** Error */
app.use(errorHandler)

let server:any;

const start = async () => {
  try {
    await connectDB();
    server = httpServer.listen(PORT, () => {
      consola.success(`API running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`);
    })
  } catch (e) {
    consola.error(e);
  }
}

process.on('unhandledRejection', (err, promise) => {
  consola.error(`Error ${err}`)
  server.close(() => {
    /** close server & exit process */
    process.exit(1)
  })
})

export { app, start };
