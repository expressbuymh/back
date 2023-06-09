import { Router } from "express";
import create from "../controllers/departments/create.js";
import read from "../controllers/departments/read.js";
import update from "../controllers/departments/update.js";
import getAllDepartments from "../controllers/departments/getAllDepartments.js";
import passport from '../middleware/passport.js'
const router = Router()



router.post('/', passport.authenticate('jwt', { session: false }), create)
router.get('/admin', passport.authenticate('jwt', { session: false }), getAllDepartments)
router.get('/', read)
router.put('/:id',passport.authenticate('jwt', { session: false }), update)


export default router