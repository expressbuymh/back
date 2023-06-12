import { Router } from 'express'
import create from '../controllers/subcategories/create.js'
import read from '../controllers/subcategories/read.js'
import getAllSubcategoryes from '../controllers/subcategories/getAllSubCategoryes.js'
import update from '../controllers/subcategories/update.js'
import changeActive from '../controllers/subcategories/changeActive.js'
import destroy from '../controllers/subcategories/delete.js'
import activeIsTrue from '../controllers/subcategories/activeIsTrue.js'
import passport from '../middleware/passport.js'
import validator from '../middleware/validator.js'
import verify_role_admin from '../middleware/categories/user_verification_middles/verify_role_admin.js'
import subcategoryExists from '../middleware/subCategories/subCategoryExists.js'
import accountHasBeenVerified from '../middleware/users/isVerified.js'
import { createSubCategory, updateSubCategory, changeProperty } from '../schema/subCategories.js'
const router = Router()

router.post('/', passport.authenticate('jwt', { session: false }),validator(createSubCategory),verify_role_admin, subcategoryExists, accountHasBeenVerified ,create)
router.get('/', read)
router.get('/active', activeIsTrue)
router.put('/property/:id', passport.authenticate('jwt', { session: false }), validator(changeProperty),verify_role_admin, accountHasBeenVerified ,changeActive)
router.get('/admin', passport.authenticate('jwt', { session: false }),verify_role_admin ,getAllSubcategoryes)
router.put('/:id', passport.authenticate('jwt', { session: false }), validator(updateSubCategory),verify_role_admin ,update)
router.delete('/:id', passport.authenticate('jwt', { session: false }),verify_role_admin ,destroy)

export default router
