import { Router } from 'express'
import read from '../controllers/products/read.js'
import create from '../controllers/products/create.js'
import update from '../controllers/products/update.js'
import destroy from '../controllers/products/delete.js'
import ProductStock from '../controllers/products/stockId.js'
import validator from '../middleware/users/validator.js'
import { newProduct } from '../schema/newProducts.js'
import passport from 'passport'
import existsProduct from '../middleware/products/exists.js'
const router = Router()

router.post('/', passport.authenticate('jwt', { session: false }), validator(newProduct), existsProduct, create)
router.get('/', read)
router.get('/stock/:id', ProductStock)
router.delete('/:id', destroy)
router.put('/:id', passport.authenticate('jwt', { session: false }), update)
router.delete('/:id', passport.authenticate('jwt', { session: false }), destroy)

export default router
