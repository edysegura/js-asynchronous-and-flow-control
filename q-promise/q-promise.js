const q = require('q');
const fs = require('fs');

function readData(filename) {
    let defer = q.defer();
    fs.readFile(filename, 'utf8', function (err, content) {
        if(err) defer.reject(err);
        let data = { filename: filename, content: content };
        defer.resolve(data);
    });
    return defer.promise;
};

function writeData(data) {
    let defer = q.defer();
    fs.writeFile(data.filename, data.content + " callback 1", function (err) {
        if(err) defer.reject(err);
        defer.resolve(data);
    });
    return defer.promise;
};

function addToLog(data) {
    let defer = q.defer();
    fs.writeFile('../data/myLog.txt', data.content + " callback 2", function (err) {
        if(err) defer.reject(err);
        defer.resolve(data);
    });
    return defer.promise;
};

function notifyMeOnSuccess(data) {
    console.log('Process finished!');
};

function notifyMeOnError(error) {
    // Handle any error from all above steps
    console.log('Process has been failed: ', error);
};

readData('../data/myData.txt')
    .then(writeData)
    .then(addToLog)
    .then(notifyMeOnSuccess)
    .catch(notifyMeOnError);