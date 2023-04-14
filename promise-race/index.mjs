import { promiseFactory, randomTime } from './promise-factory.mjs';

const firstResponse = await Promise.race([
    promiseFactory('Promise 1', randomTime()),
    promiseFactory('Promise 2', randomTime()),
    promiseFactory('Promise 3', randomTime()),
    promiseFactory('Promise 4', randomTime())
])

console.log(firstResponse)