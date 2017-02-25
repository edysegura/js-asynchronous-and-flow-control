# JavaScript Promise

This example demonstrate how to organize your asynchronous JavaScript code using the promise pattern and avoid callback from hell.

## Callback from hell

```javascript
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
```

## References

- [ES6 Promises](http://www.datchley.name/es6-promises/)
- [kriskowal Q](https://github.com/kriskowal/q)