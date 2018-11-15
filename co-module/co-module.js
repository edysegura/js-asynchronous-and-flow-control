const co = require('co')
const {
  readData,
  writeData,
  addToLog,
  notifyOnSuccess,
  notifyOnError
} = require('../commons/promises')

co(function*() {
  const data = yield readData('../data/myData.txt')
  const result = yield writeData(data)
  yield addToLog(result)
  notifyOnSuccess()
}).catch(notifyOnError)
