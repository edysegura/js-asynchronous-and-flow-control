# JavaScript Asynchronous and Flow-control

These examples demonstrate how to organize your asynchronous JavaScript code using the promises, reactive and flow-control patterns to avoid JavaScript callback hell.

## JavaScript Callback Hell

```js
fs.readFile(myDataFile, 'utf8', function(error, data) {
  if (error) throw error;
  fs.writeFile(myDataFile, data + ' callback 1', function(error) {
    if (error) throw error;
    fs.writeFile(myLogFile, data + ' callback 2', function(error) {
      if (error) throw error;
      console.log('Process has been finished!');
    });
  });
});
```

## Examples

- [Kriskowal Q library](q-promise)
- [ES6/2015 Promise constructor](es6-promise)
- [ES6/2015 Promise.all method](es6-promise-all)
- [ES6/2015 Promise.race method](es6-promise-race)
- [Async Module](async-module)
- [CO Module](co-module)
- [Async/Await](async-await)
- [Using async/await with Array.prototype.map()](async-map/index.js)

## References

- [Async/Await in JavaScript - What, Why and How - Fun Fun Function](https://www.youtube.com/watch?v=568g8hxJJp4)
- [Callback of heaven](https://www.youtube.com/watch?v=Ir9-EBbc9fg)
- [Callbacks vs Promises vs RxJs Observables vs async/await](https://www.youtube.com/watch?v=jgWnccjXR4I)
- [ES6 Promises](http://www.datchley.name/es6-promises/)
- [Flow Control in Modern JS: Callbacks to Promises to Async/Await](https://www.sitepoint.com/flow-control-callbacks-promises-async-await/)
- [Hands-on with CO module](https://www.youtube.com/watch?v=IXsxtIZuY90)
- [kriskowal Q](https://github.com/kriskowal/q)
- [Learn about promises before you start using async/await](https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8)
- [Node Hero - Understanding Async Programming in Node.js](https://blog.risingstack.com/node-hero-async-programming-in-node-js/)
- [Node.js Async Best Practice & Avoiding Callback Hell](https://blog.risingstack.com/node-js-async-best-practices-avoiding-callback-hell-node-js-at-scale/)
- [The async/await pitfalls](https://medium.com/@oieduardorabelo/javascript-armadilhas-do-asyn-await-em-loops-1cdad44db7f0)

---

In case you have doubt why I'm not using semicolon is because I got inspiration from these talks:

- [Semicolons cannot save you!](https://www.youtube.com/watch?v=Qlr-FGbhKaI)
- [Are Semicolons Necessary in JavaScript?](https://www.youtube.com/watch?v=gsfbh17Ax9I)
