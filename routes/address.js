import { Router } from 'express'
import create from '../controllers/address/create.js'

import passport from '../middleware/passport.js'
import read from '../controllers/address/read.js'

const router = Router()

router.get('/:id', read)
router.post('/',passport.authenticate('jwt', { session: false }), create)


export default router