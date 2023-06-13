import { Router } from "express";
import notification from "../controllers/status/success.js";
const router = Router()


router.post('/notification', notification)


export default router