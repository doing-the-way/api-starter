import express, { Router } from 'express'
import { me } from './admin.controllers'

const admin = express()

admin.on('mount', function (parent) {
  console.log('Admin Mounted', admin.mountpath)
})

admin
  .route('/')
  .get(me)

export default admin
