import { Router } from 'express'
import creeateOrder from '../controllers/orders/create.js'
import allOrders from '../controllers/orders/read.js'
import my_orders from '../controllers/orders/my_orders.js'
import getOrders from '../controllers/orders/getAll.js'
import update from '../controllers/orders/updateStatus.js'

import passport from '../middleware/passport.js'

const router = Router()

router.get('/:id', allOrders)
router.post('/seeorders', passport.authenticate('jwt', { session: false }),creeateOrder)
router.get("/myorders", passport.authenticate("jwt", {session: false}), my_orders)
router.get('/', passport.authenticate('jwt', { session: false }), getOrders)
router.put('/:id', passport.authenticate('jwt', { session: false }), update)



export default router







