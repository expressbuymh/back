import { Router } from 'express'
import creeateOrder from '../controllers/orders/create.js'
import seeOrders from '../controllers/orders/read.js'

import passport from '../middleware/passport.js'

const router = Router()

router.get('/:id', seeOrders)
router.post('/seeorders', passport.authenticate('jwt', { session: false }),creeateOrder)

export default router