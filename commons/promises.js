const fs = require('fs');

exports.readData = function (filename) {
    let promise = new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (error, content) => {
            if(error) reject(error);
            let data = { filename: filename, content: content };
            resolve(data);
        });
    });
    return promise;
};

exports.writeData = function (data) {
    let promise = new Promise((resolve, reject) => {
        fs.writeFile(data.filename, data.content + "\nadded text", (error) => {
            if(error) reject(error);
            resolve(data);
        });
    });
    return promise;
};

exports.addToLog = function (data) {
    let promise = new Promise((resolve, reject) => {
        let logMessage = `[${new Date().toISOString()}] ${data.filename} has been changed`;
        fs.writeFile('../data/myLog.txt', logMessage, (error) => {
            if(error) reject(error);
            resolve(data);
        });
    });
    return promise;
};

exports.notifyOnSuccess = function (data) {
    console.log('Process has been finished!');
};

exports.notifyOnError = function (error) {
    // Handle any error from all above steps
    console.log('Process has been failed: ', error);
};