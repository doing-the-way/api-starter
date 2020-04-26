import express from 'express';
import admin from './resources/admin/admin.router'
import home from './resources/home/home.router'
import error from './resources/error/error.router'

const router = express()

// router.on('mount', parent => {
//   console.log(' ---- Mount ----- ', router.mountpath);
// })

router.use('/admin', admin)
router.use('/home', home)
router.use('/error', error)

export default router

