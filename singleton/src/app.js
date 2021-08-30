import express from 'express'

import Logger from './logger.js'
import { router } from './routes/index.js'

const app = express()

Logger.setConfig({
  appName: 'Samuka App'
})

app.use(router)

app.get("/consoleTest", (req, res) => {
  res.status(200).send()
  Logger.log('Request GET in /consoleTest')
})

export { app }