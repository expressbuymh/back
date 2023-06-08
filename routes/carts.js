import { Router } from "express";
import passport from '../middleware/passport.js'
import create from "../controllers/carts/create.js";
import addProducts from "../controllers/carts/addProduct.js";
const router = Router()


router.post('/', passport.authenticate('jwt', { session: false }), create)
router.post('/addproducts/:id', addProducts)



export default router