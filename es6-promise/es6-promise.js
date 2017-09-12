const { readData, writeData, addToLog, notifyOnSuccess, notifyOnError } = require('../commons/promises')

readData('../data/myData.txt')
    .then(writeData)
    .then(addToLog)
    .then(notifyOnSuccess)
    .catch(notifyOnError)