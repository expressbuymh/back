import { Router } from 'express'
import create from '../controllers/subcategories/create.js'
import read from '../controllers/subcategories/read.js'
import getAllSubcategoryes from '../controllers/subcategories/getAllSubCategoryes.js'
import update from '../controllers/subcategories/update.js'
import changeActive from '../controllers/subcategories/changeActive.js'
import destroy from '../controllers/subcategories/delete.js'
import activeIsTrue from '../controllers/subcategories/activeIsTrue.js'
import passport from '../middleware/passport.js'
const router = Router()

router.post('/', passport.authenticate('jwt', { session: false }), create)
router.get('/', read)
router.get('/active', activeIsTrue)
router.put('/property/:id', passport.authenticate('jwt', { session: false }), changeActive)
router.get('/admin', passport.authenticate('jwt', { session: false }), getAllSubcategoryes)
router.put('/:id', passport.authenticate('jwt', { session: false }), update)
router.delete('/:id', passport.authenticate('jwt', { session: false }), destroy)

export default router
