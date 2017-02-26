const q = require('q');
const fs = require('fs');

function readData(filename) {
    let defer = q.defer();
    fs.readFile(filename, 'utf8', function (error, content) {
        if(error) defer.reject(error);
        let data = { filename: filename, content: content };
        defer.resolve(data);
    });
    return defer.promise;
};

function writeData(data) {
    let defer = q.defer();
    fs.writeFile(data.filename, data.content + "\nadded text", function (error) {
        if(error) defer.reject(error);
        defer.resolve(data);
    });
    return defer.promise;
};

function addToLog(data) {
    let defer = q.defer();
    let logMessage = `[${new Date().toISOString()}] ${data.filename} has been changed`;
    fs.writeFile('../data/myLog.txt', logMessage, function (error) {
        if(error) defer.reject(error);
        defer.resolve(data);
    });
    return defer.promise;
};

function notifyOnSuccess(data) {
    console.log('Process has been finished!');
};

function notifyOnError(error) {
    // Handle any error from all above steps
    console.log('Process has been failed: ', error);
};

readData('../data/myData.txt')
    .then(writeData)
    .then(addToLog)
    .then(notifyOnSuccess)
    .catch(notifyOnError);