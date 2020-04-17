import express from 'express'
import consola from 'signale'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

import home from './resources/home/home.router'
import admin from './resources/admin/admin.router'

const app = express()

app.disable('x-powered-by')
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))


app.use('/',  home)
app.use('/admin', admin)

const start = async () => {
  try {
    await app.listen(4200, () => {
      consola.success(`REST API on http://localhost:4200`)
    })
  } catch (e) {
    consola.error(e)
  }
}

export { app, start };
