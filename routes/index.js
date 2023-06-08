import express from 'express'
import userRouter from './users.js'
import productsRouter from './products.js'
import invoicesRouter from './invoice.js'
import categoriesRouter from './categories.js'
import subcategoriesRouter from './subcategories.js'
import departmentRouter from './departments.js'
import paymentRouter from './paymments.js'
import orderRouter from './orders.js'
import addressRouter from './address.js'
import cartRouter from './carts.js'


const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.use('/auth', userRouter)
router.use('/products', productsRouter)
router.use('/invoices', invoicesRouter)
router.use('/categories', categoriesRouter)
router.use('/subcategories', subcategoriesRouter)
router.use('/departments', departmentRouter)
router.use('/paymments', paymentRouter)
router.use('/orders', orderRouter)
router.use('/addresses', addressRouter)
router.use('/carts', cartRouter)
export default router
