# JavaScript Promise

This example demonstrate how to organize your asynchronous JavaScript code using the promise pattern and avoid callback from hell.

## Callback from hell

```javascript
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
```

## Examples

1. [Using Kriskowal Q library](q-promise)
1. [Using ES6/2015 Promise constructor](es6-promise)
1. [Using Async Module](async-module)
1. [Using CO Module](co-module)

## References

- [ES6 Promises](http://www.datchley.name/es6-promises/)
- [kriskowal Q](https://github.com/kriskowal/q)
- [Node.js Async Best Practice & Avoiding Callback Hell](https://blog.risingstack.com/node-js-async-best-practices-avoiding-callback-hell-node-js-at-scale/)
- [Hands-on with CO module](https://www.youtube.com/watch?v=IXsxtIZuY90)
