import { Router } from 'express'
import getOrders from '../controllers/orders/getAll.js'
import update from '../controllers/orders/updateStatus.js'
import passport from '../middleware/passport.js'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), getOrders)
router.put('/:id', passport.authenticate('jwt', { session: false }), update)

export default router