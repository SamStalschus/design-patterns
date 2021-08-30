class Logger {
  constructor() {
    this.config = {
      appName: 'Not configured'
    }
  }

  setConfig(config) {
    this.config = config
  }

  log(message, ...params) {
    console.log(this.config.appName, message, ...params)
  }
}

export default new Logger()

// Below is the same structure without using Class

// let configuration = {
//   appName: 'Not configured'
// }

// const LoggerObj = {
//   setConfig(config) {
//     configuration = config
//   },
//   log(message, ...params) {
//     console.log(configuration.appName, message, ...params)
//   }
// }

// module.exports = LoggerObj