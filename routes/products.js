import { Router } from 'express'
import validator from '../middleware/validator.js'
import { create_schema } from '../schema/products.js'
import passport from '../middleware/passport.js'
import create from '../controllers/products/create.js'

const router = Router()

/* router.post('/', passport.authenticate('jwt', { session: false }), validator(newProduct), existsProduct, create)
//Remplazo de read por productsFilter (es un read, pero con filtros aplicables)
//router.get('/', read)
router.get('/', productsFilter)
router.get('/stock/:id', ProductStock)
router.delete('/:id', destroy)
router.put('/:id', passport.authenticate('jwt', { session: false }), update)
router.delete('/:id', passport.authenticate('jwt', { session: false }), destroy) */

router.post('/', passport.authenticate('jwt', {session: false}), validator(create_schema), create)

export default router
