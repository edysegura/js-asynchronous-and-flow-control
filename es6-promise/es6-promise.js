const fs = require('fs');

function readData(filename) {
    let promise = new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (error, content) => {
            if(error) reject(error);
            let data = { filename: filename, content: content };
            resolve(data);
        });
    });
    return promise;
};

function writeData(data) {
    let promise = new Promise((resolve, reject) => {
        fs.writeFile(data.filename, data.content + "\nadded text", (error) => {
            if(error) reject(error);
            resolve(data);
        });
    });
    return promise;
};

function addToLog(data) {
    let promise = new Promise((resolve, reject) => {
        let logMessage = `[${new Date().toISOString()}] ${data.filename} has been changed`;
        fs.writeFile('../data/myLog.txt', logMessage, (error) => {
            if(error) reject(error);
            resolve(data);
        });
    });
    return promise;
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