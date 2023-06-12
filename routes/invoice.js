import { Router } from 'express'
import create from '../controllers/invoice/create.js'
import passport from '../middleware/passport.js'
import validator from '../middleware/validator.js'

import { createInvoice } from '../schema/invoice.js'
const router = Router()

router.post('/',passport.authenticate('jwt', { session: false }),validator(createInvoice),   create)

// 

export default router
