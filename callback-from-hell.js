const fs = require('fs');
const myDataFile = './data/myData.txt';
const myLogFile = './data/myLog.txt';

fs.readFile(myDataFile, 'utf8', function (err, data) {
    if(err) throw err;
    fs.writeFile(myDataFile, data + " callback 1", function (err) {
        if(err) throw err;
        fs.writeFile(myLogFile, data + " callback 2", function (err) {
            if(err) throw err;
            console.log("Process finished!");
        });
    });
});
