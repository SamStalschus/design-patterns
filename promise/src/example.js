import fs from 'fs'
import util from 'util'

const readFilePromise = util.promisify(fs.readFile)

const fileContent = fs.readFileSync('./example.js')
console.log('fileContent', fileContent)
console.log('test 1')

/**
 * Notice that the console inside the function below is the last to be executed, 
 * Nodejs identifies the callback function and throws this execution to be 
 * processed in the background, calling it after all execution.
 */
fs.readFile('./example.js', (err, data) => {
  console.log('async fileContent', data)
})
console.log('test 2')

/**
 * In the example below we are using Promise,
 * it works just like the example above only we 
 * replace the callback function with .then()
 */
readFilePromise('./example.js')
  .then(fileData => console.log(fileData))
console.log('test 3')