import express, { Router } from 'express'
import { me } from './home.controllers'

const home = express()

home.on('mount', function (parent) {
  console.log('Home Mounted', home.mountpath)
})


home
  .route('/')
  .get(me)

export default home
