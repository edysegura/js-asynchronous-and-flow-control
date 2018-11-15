const async = require('async')
const fs = require('fs')

function readData(callback) {
  let filename = '../data/myData.txt'
  fs.readFile(filename, 'utf8', (error, content) => {
    if (error) callback(error)
    let data = { filename, content }
    callback(null, data)
  })
}

function writeData(data, callback) {
  fs.writeFile(data.filename, data.content + '\nadded text', error => {
    if (error) callback(error)
    callback(null, data)
  })
}

function addToLog(data, callback) {
  let logMessage = `[${new Date().toISOString()}] ${data.filename} has been changed`
  fs.writeFile('../data/myLog.txt', logMessage, error => {
    if (error) callback(error)
    callback(null, data)
  })
}

function notifyOnDone(error) {
  // Handle any error from all above steps
  if (error) console.log('Process has been failed: ', error)
  console.log('Process has been finished!')
}

async.waterfall(
  [
    readData,
    writeData,
    addToLog
  ],
  notifyOnDone
)
