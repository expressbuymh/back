import { Router } from 'express'
const router = Router()
import my_orders from '../controllers/orders/my_orders.js'
import getOrders from '../controllers/orders/getAll.js'
import update from '../controllers/orders/updateStatus.js'
import passport from '../middleware/passport.js'



const router = Router()

router.get("/myorders", passport.authenticate("jwt", {session: false}), my_orders)
router.get('/', passport.authenticate('jwt', { session: false }), getOrders)
router.put('/:id', passport.authenticate('jwt', { session: false }), update)


export default router