import { Router } from 'express'
import create from '../controllers/categories/create.js'
import read from '../controllers/categories/read.js'
import update from '../controllers/categories/update.js'
import destroy from '../controllers/categories/delete.js'
const router = Router()

router.post('/', create)
router.get('/', read)
router.put('/:id', update)
router.delete('/:id', destroy)

export default router
