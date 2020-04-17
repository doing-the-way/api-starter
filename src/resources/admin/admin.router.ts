import express, { Router } from 'express'
import { me } from './admin.controllers'

const admin = express()

admin.on('mount', function (parent) {
  console.log('Admin Mounted', admin.mountpath)
  // console.log(parent.response) // refers to the parent app
})

admin
  .route('/')
  .get(me)

export default admin
