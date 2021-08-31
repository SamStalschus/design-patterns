const STATE = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
}

class NPromise {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new Error(`Promise resolver ${executor} is not a function`)
    }

    this.state = STATE.PENDING
    this.value = undefined
    this.onFullfillChain = []
    this.onRejectCallChain = []

    executor(this.resolve.bind(this))
  }

  then(onFullfill) {
    return new NPromise(resolve => {
      resolve(onFullfill(this.value))
    })
  }

  resolve(res) {
    if (this.state != STATE.PENDING) {
      return
    }

    this.state = STATE.FULFILLED
    this.value = res
  }
}

export default NPromise