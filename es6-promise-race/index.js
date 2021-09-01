const promiseFactory = (name, time) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(name + ' ' + time), time)
    })
}

const randomTime = () => (""+Math.random()).substr(2,2)

Promise.race([
    promiseFactory('Promise 1', randomTime()),
    promiseFactory('Promise 2', randomTime()),
    promiseFactory('Promise 3', randomTime()),
    promiseFactory('Promise 4', randomTime())
])
.then(data => console.log(data))
.catch(error => console.log(error))