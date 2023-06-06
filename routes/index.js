import express from 'express'
import productsRouter from './products.js'
import invoicesRouter from './invoice.js'
import categoriesRouter from './categories.js'
import subcategoriesRouter from './subcategories.js'
import departmentRouter from './departments.js'
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})



router.use('/products', productsRouter)
router.use('/invoices', invoicesRouter)
router.use('/categories', categoriesRouter)
router.use('/subcategories', subcategoriesRouter)
router.use('/departments', departmentRouter)



export default router
