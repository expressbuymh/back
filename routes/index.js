import express from 'express'
import productRouter from './products.js'
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})



router.use('/product', productRouter)



export default router
