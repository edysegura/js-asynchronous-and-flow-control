const {readData, writeData, addToLog, notifyOnSuccess, notifyOnError} = require('./promises')

readData('../data/myData.txt')
    .then(writeData)
    .then(addToLog)
    .then(notifyOnSuccess)
    .catch(notifyOnError)