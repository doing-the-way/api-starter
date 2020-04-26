import express, { Router } from 'express'
import * as controller  from './controllers'

const home = Router()

// home.on('mount',  parent => {
//   console.log('Home Mounted', home.mountpath)
// })

home
  .route('/')
  .get(controller.home)

export default home
