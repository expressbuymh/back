import { Router } from 'express'

import passport from '../middleware/passport.js'
import validator from '../middleware/validator.js'
import create from '../controllers/categories/create.js'
import read from '../controllers/categories/read.js'
import update from '../controllers/categories/update.js'
import destroy from '../controllers/categories/delete.js'
import read_actives from '../controllers/categories/read_actives.js'

import {schema} from '../schema/categories.js'

const router = Router()

router.post('/',passport.authenticate('jwt', { session: false }),validator(schema), create)
router.get('/admin', read)  //middle para verificar role
router.get('/', read_actives)
router.put('/:id',passport.authenticate('jwt', { session: false }), update)
router.delete('/:id',passport.authenticate('jwt', { session: false }), destroy)

export default router
