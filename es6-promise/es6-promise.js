const fs = require('fs');

function readData(filename) {
    let promise = new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', function (err, content) {
            if(err) reject(err);
            let data = { filename: filename, content: content };
            resolve(data);
        });
    });
    return promise;
};

function writeData(data) {
    let promise = new Promise((resolve, reject) => {
        fs.writeFile(data.filename, data.content + " callback 1", function (err) {
            if(err) reject(err);
            resolve(data);
        });
    });
    return promise;
};

function addToLog(data) {
    let promise = new Promise((resolve, reject) => {
        fs.writeFile('../data/myLog.txt', data.content + " callback 2", function (err) {
            if(err) reject(err);
            resolve(data);
        });
    });
    return promise;
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