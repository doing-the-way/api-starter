import express from 'express';
import admin from './resources/admin/admin.router'
import home from './resources/home/home.router'

const router = express()

// router.on('mount', parent => {
//   console.log(' ---- Mount ----- ', router.mountpath);
// })

router.use('/admin', admin)
router.use('/home', home)

export default router

