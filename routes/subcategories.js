import { Router } from 'express'
import create from '../controllers/subcategories/create.js'
import read from '../controllers/subcategories/read.js'
import update from '../controllers/subcategories/update.js'
import destroy from '../controllers/subcategories/delete.js'
const router = Router()

router.post('/', create)
router.get('/', read)
router.put('/:id', update)
router.delete('/:id', destroy)

export default router
