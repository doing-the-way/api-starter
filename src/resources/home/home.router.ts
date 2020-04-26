import express, { Router } from 'express'
import * as controller  from './controllers'

const home = Router()

home
  .route('/')
  .get(controller.home)

export default home
