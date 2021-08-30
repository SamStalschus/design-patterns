import { MiddlewareManager } from '../middlewareManager.js'

describe('Middleware Manager', () => {
  test('should execute all midlewares in order until reaching the end', () => {
    const logMiddleware = (data, next) => {
      console.log('logMiddleware', data.user)
      next(data)
    }
    const nameEnhanceMiddleware = (data, next) => {
      data.user.firstName = data.user.name.split(' ')[0]
      next()
    }
    const expectMiddleware = (data, next) => {
      expect(data.user.firstName).toBe('Sam')
      next()
    }
    const data = {
      user: {
        name: 'Sam Stalschus'
      }
    }

    const middlewareManager = new MiddlewareManager()
    middlewareManager.use(logMiddleware)
    middlewareManager.use(nameEnhanceMiddleware)
    middlewareManager.use(expectMiddleware)
    middlewareManager.process(data)
  })
})