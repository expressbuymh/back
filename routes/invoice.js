import { Router } from 'express'
import create from '../controllers/invoice/create.js'
import passport from '../middleware/passport.js'
const router = Router()

router.post('/',  passport.authenticate('jwt', { session: false }), create)

export default router
