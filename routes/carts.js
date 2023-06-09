import { Router } from "express";
import passport from '../middleware/passport.js'
import create from "../controllers/carts/create.js";
import addProducts from "../controllers/carts/addProduct.js";
import clearProduct from "../controllers/carts/clearProduct.js";
import getmeCart from "../controllers/carts/getme_cart.js";
import checkoutProduct from "../controllers/carts/checkout.js";
const router = Router()

//esto es interno hay q sacar el post de carrito dejar solo el de producto
router.post('/', passport.authenticate('jwt', { session: false }), create)
router.post('/addproducts/:id', passport.authenticate('jwt', { session: false }), addProducts)
router.put('/clear/:id', passport.authenticate('jwt', { session: false }), clearProduct)
router.get('/', passport.authenticate('jwt', { session: false }), getmeCart)
router.put('/checkout/:id', passport.authenticate('jwt', { session: false }), checkoutProduct)


export default router