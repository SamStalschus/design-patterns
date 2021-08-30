import request from 'supertest'

import { app } from '../app'
/**
 * The purpose here is to test the logger that was written in the paternal singleton,
 * the logger config was inserted only once in one module of the application and 
 * should serve for every application
 */
describe('You must test a get on the routes', () => {
  test('It should respond with an status 200', async () => {
    const response = await request(app).get('/consoleTest')
    expect(response.statusCode).toBe(200)
  })

  test('It should check the logger printout on the console in route /consoleTest', async () => {
    const consoleSpy = jest.spyOn(console, 'log')
    await request(app).get('/consoleTest')
    expect(consoleSpy).toHaveBeenCalledWith('Samuka App', 'Request GET in /consoleTest')
  })

  test('It should check the logger printout on the console in route /test/get', async () => {
    const consoleSpy = jest.spyOn(console, 'log')
    await request(app).get('/test/get')
    expect(consoleSpy).toHaveBeenCalledWith('Samuka App', 'Pattern Singleton')
  })
})