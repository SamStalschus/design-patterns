import { Router } from 'express'

import Logger from '../logger.js'

const testRouter = Router()

testRouter.get('/get', (req, res) => {
  res.status(200).send()
  Logger.log('Pattern Singleton')
})

export { testRouter }