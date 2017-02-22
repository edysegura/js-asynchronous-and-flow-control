var 
	q = require('q'),
	fs = require('fs');

function readData(filename) {
	var defer = q.defer();
	fs.readFile(filename, 'utf8', function(err, content) {
		var data = {filename: filename, content: content};
		defer.resolve(data);
		//when there is a error call the reject
		//defer.reject(data);
	});
	return defer.promise;
};

function writeData(data) {
	var defer = q.defer();
	fs.writeFile(data.filename, data.content + " callback 1", function(err) {
		defer.resolve(data);
	});
	return defer.promise;
};

function addToLog(data) {
	var defer = q.defer();
	fs.writeFile('myLog.txt', data.content + " callback 2", function(err) {
		defer.resolve(data);
	});
	return defer.promise;
};

function notifyMeOnSuccess(data) {
	console.log('Process finished!');
};

function notifyMeOnError(error) {
	// Handle any error from all above steps
    console.log('Process has been failed', error);
};

readData('myData.txt')
.then(writeData)
.then(addToLog)
.then(notifyMeOnSuccess)
.catch(notifyMeOnError);