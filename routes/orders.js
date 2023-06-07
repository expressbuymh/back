import { Router } from 'express'

import ProductStock from '../controllers/orders/read.js'

const router = Router()

router.get('/:id', ProductStock)


export default router