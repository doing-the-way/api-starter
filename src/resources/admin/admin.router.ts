import { Router } from 'express'
import { me } from './admin.controllers'

const admin = Router()



admin
  .route('/')
  .get(me)

export default admin
