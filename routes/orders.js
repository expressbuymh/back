import { Router } from 'express'
import passport from '../middleware/passport.js'
import my_orders from '../controllers/orders/my_orders.js'
const router = Router()

router.get("/myorders", passport.authenticate("jwt", {session: false}), my_orders)

export default router