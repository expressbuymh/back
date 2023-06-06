import { Router } from "express";
import create from "../controllers/departments/create.js";
import read from "../controllers/departments/read.js";
import update from "../controllers/departments/update.js";
import destroy from "../controllers/departments/delete.js"
const router = Router()



router.post('/', create)
router.get('/', read)
router.put('/:id', update)
router.delete('/:id', destroy)

export default router