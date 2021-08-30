import { Router } from 'express'

import { testRouter } from './test.routes.js'

const router = Router()

router.use('/test', testRouter)

export { router }