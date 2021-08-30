import { DataPipeline } from './dataPipeline.js'

class MiddlewareManager {
  constructor() {
    this.middlewares = []
  }

  process(data = {}) {
    const dataPipeline = new DataPipeline(this.middlewares, data)

    dataPipeline.dispatch()
  }

  use(middleware) {
    this.middlewares.push(middleware)
  }
}

export { MiddlewareManager }