import { app } from './app.js'

import Logger from './logger.js'

app.listen(3000, () => { Logger.log('Server is running') })