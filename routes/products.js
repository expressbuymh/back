import { Router } from 'express'
import read from '../controllers/products/read.js'
import create from '../controllers/products/create.js'
import update from '../controllers/products/update.js'
import destroy from '../controllers/products/delete.js'
import ProductStock from '../controllers/products/stockId.js'
const router = Router()

router.post('/', create)
router.get('/', read)
router.get('/stock/:id', ProductStock)
router.put('/:id', update)
router.delete('/:id', destroy)

export default router
