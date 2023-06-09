import { Router } from 'express'
//middlewares
import validator from '../middleware/validator.js'
import passport from '../middleware/passport.js'
//schema
import { create_schema, update_schema } from '../schema/products.js'
//controllers
import create from '../controllers/products/create.js'
import update from '../controllers/products/update.js'
import destroy from '../controllers/products/destroy.js'
import getOne from '../controllers/products/get_one.js'
import active from '../controllers/products/active.js'
import discount from '../controllers/products/products_discount.js'
import allDiscount from '../controllers/products/products_discount.js'

const router = Router()

/* router.post('/', passport.authenticate('jwt', { session: false }), validator(newProduct), existsProduct, create)
//Remplazo de read por productsFilter (es un read, pero con filtros aplicables)
//router.get('/', read)
router.get('/', productsFilter)
router.get('/stock/:id', ProductStock)
router.delete('/:id', destroy)
router.put('/:id', passport.authenticate('jwt', { session: false }), update)
router.delete('/:id', passport.authenticate('jwt', { session: false }), destroy) */


router.get('/discount', allDiscount)
router.put('/active/:id',passport.authenticate('jwt', {session: false}), active)
router.post('/', passport.authenticate('jwt', {session: false}), validator(create_schema), create)
router.put('/:id', passport.authenticate('jwt', {session: false}), validator(update_schema), update)
router.delete('/:id',passport.authenticate('jwt', {session: false}),  destroy)
router.get('/:id',getOne)
export default router
