var 
	fs = require('fs'),
	myDataFile = 'myData.txt',
	myLogFile = 'myLog.txt';

fs.readFile(myDataFile, 'utf8', function(err, data) {
	fs.writeFile(myDataFile, data + " callback 1", function(err) {
		fs.writeFile(myLogFile, data + " callback 2", function(err) {
			console.log("Process finished!");
		});
	});
});
