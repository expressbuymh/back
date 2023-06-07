import { Router } from 'express'
import read from '../controllers/products/read.js'
import create from '../controllers/products/create.js'
import update from '../controllers/products/update.js'
import destroy from '../controllers/products/delete.js'
import productsFilter from '../controllers/products/products_filter.js'
const router = Router()

router.post('/', create)
router.get('/', productsFilter)
router.put('/:id', update)
router.delete('/:id', destroy)

export default router
