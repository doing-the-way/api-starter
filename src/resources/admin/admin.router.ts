import { Router } from 'express'
import * as controller from './controllers/'

const admin = Router()

admin
  .route('/')
  .get(controller.admin)

export default admin
