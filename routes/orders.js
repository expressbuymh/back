import { Router } from 'express'
//middlewares
import passport from '../middleware/passport.js'
//controllers
import statusPaid from '../controllers/orders/status_paid.js'
import statusShipped from '../controllers/orders/status_shipped.js'

const router = Router()


//cambia la orden a paid
router.put('/paid/:id', passport.authenticate('jwt',{session: false}), statusPaid)
router.put('/shipped/:id', passport.authenticate('jwt',{session: false}), statusShipped)



export default router







