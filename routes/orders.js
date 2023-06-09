import { Router } from 'express'
//middlewares
import passport from '../middleware/passport.js'
//controllers
import statusPaid from '../controllers/orders/status_paid.js'
import statusShipped from '../controllers/orders/status_shipped.js'
import statusDelivered from '../controllers/orders/status_delivered.js'

const router = Router()


//cambia la orden a paid
router.put('/paid/:id', passport.authenticate('jwt',{session: false}), statusPaid)
router.put('/shipped/:id', passport.authenticate('jwt',{session: false}), statusShipped)
router.put('/delivered/:id', passport.authenticate('jwt',{session: false}), statusDelivered)



export default router







