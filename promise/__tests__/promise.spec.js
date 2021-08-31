import NPromise from '../newPromise.js'

describe('Promise', () => {
  test('should create a new Promise with pending state', () => {
    const promise = new NPromise(() => { })
    expect(promise.state).toBe('pending')
    expect(promise.value).toBe(undefined)
  })

  describe('When fulfilled', () => {

    test('should then a Promise', done => {
      return new NPromise(resolve => resolve({ data: 'fake' }))
        .then(response => {
          expect(response.data).toBe('fake')
        })
    })
  })
})