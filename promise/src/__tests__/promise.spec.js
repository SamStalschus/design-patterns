import NPromise from '../newPromise.js'

describe('Promise', () => {
  test('should create a new Promise with pending state', () => {
    const promise = new NPromise(() => { })
    expect(promise.state).toBe('pending')
    expect(promise.value).toBe(undefined)
  })

  describe('When fulfilled', () => {

    test('should then a Promise', () => {

      /**
       * Examples
       */
      // setTimeout(() => {
      //   console.log('timeout')
      //   done()
      // }, 0)
      // new Promise(resolve => resolve()).then(() => console.log('promise 1'))
      // new NPromise(resolve => resolve()).then(() => console.log('promise 2'))
      // console.log('sync part')

      return new NPromise(resolve => resolve({ data: 'fake' }))
        .then(response => {
          expect(response.data).toBe('fake')
        })
    })

    test('should call then just when the async code is resolved', () => {
      return new NPromise(resolve => {
        setTimeout(() => resolve({ data: 'fake' }), 3)
      })
        .then(response => {
          expect(response.data).toBe('fake')
        })
    })

    test('should allow the same promise to be thenable multiple times', () => {
      const p1 = new NPromise(resolve => setTimeout(() => resolve({ data: 'fake' }), 3))

      p1.then(response => expect(response.data).toBe('fake'))
      p1.then(response => {
        expect(response.data).toBe('fake')
      })
    })

    test('should support chain of promises on whitch promises are return', () => {
      const fakeFSPromise = new Promise(resolve => setTimeout(() => resolve({ file: 'photo.jpg' }), 3))

      return new NPromise(resolve => {
        setTimeout(() => resolve({ data: 'promise1' }), 3)
      })
        .then(response => {
          expect(response.data).toBe('promise1')
          return fakeFSPromise
        })
        .then(response => {
          expect(response.file).toBe('photo.jpg')
        })
    })
  })

  describe('Error handling', () => {
    test('should call catch when an error is thrown', () => {
      const errorMessage = 'Promise has been rejected'

      return new NPromise((resolve, reject) => {
        setTimeout(() => reject(new Error(errorMessage)), 3)
      })
        .catch(error => {
          expect(error.message).toBe(errorMessage)
        })
    })

    test('should allow catch to be thenable', () => {
      const errorMessage = 'Promise has been rejected'

      return new NPromise((resolve, reject) => {
        setTimeout(() => reject(new Error(errorMessage)), 3)
      })
        .catch(error => {
          expect(error.message).toBe(errorMessage)
          return { data: 'someData' }
        })
        .then(response => {
          expect(response.data).toBe('someData')
        })
    })

    test('should allow to catch an error thrown by a previous catch method', () => {
      const errorMessage = 'Promise has been rejected'

      return new NPromise((resolve, reject) => {
        setTimeout(() => reject(new Error(errorMessage)), 3)
      })
        .catch(error => {
          expect(error.message).toBe(errorMessage)
          throw new Error('another error')
        })
        .catch(error => {
          expect(error.message).toBe('another error')
        })
    })
  })
})