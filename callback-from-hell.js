const fs = require('fs');
const myDataFile = './data/myData.txt';
const myLogFile = './data/myLog.txt';

fs.readFile(myDataFile, 'utf8', function (error, data) {
    if(error) throw error;
    fs.writeFile(myDataFile, data + " callback 1", function (error) {
        if(error) throw error;
        fs.writeFile(myLogFile, data + " callback 2", function (error) {
            if(error) throw error;
            console.log("Process has been finished!");
        });
    });
});
