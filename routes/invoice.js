import { Router } from "express";
import create from '../controllers/invoice/create.js'
const router = Router()


router.post('/', create)




export default router