# JavaScript Promise and Flow-control

These examples demonstrate how to organize your asynchronous JavaScript code using the promise and flow-control patterns to avoid callback from hell.

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

1. [Kriskowal Q library](q-promise)
1. [ES6/2015 Promise constructor](es6-promise)
1. [ES6/2015 Promise.all method](es6-promise-all)
1. [ES6/2015 Promise.race method](es6-promise-race)
1. [Async Module](async-module)
1. [CO Module](co-module)
1. [Async/Await](async-await)

## References

- [ES6 Promises](http://www.datchley.name/es6-promises/)
- [kriskowal Q](https://github.com/kriskowal/q)
- [Node.js Async Best Practice & Avoiding Callback Hell](https://blog.risingstack.com/node-js-async-best-practices-avoiding-callback-hell-node-js-at-scale/)
- [Node Hero - Understanding Async Programming in Node.js](https://blog.risingstack.com/node-hero-async-programming-in-node-js/)
- [Hands-on with CO module](https://www.youtube.com/watch?v=IXsxtIZuY90)
- [Async/Await in JavaScript - What, Why and How - Fun Fun Function](https://www.youtube.com/watch?v=568g8hxJJp4)