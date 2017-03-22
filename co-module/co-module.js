const {readData, writeData, addToLog, notifyOnSuccess, notifyOnError} = require('../commons/promises')
const co = require('co');

co(function * () {
    const data = yield readData('../data/myData.txt');
    const result = yield writeData(data);
    yield addToLog(result);
})
.then(notifyOnSuccess)
.catch(notifyOnError);