function promiseFactory(value, delay = 0) {
  return new Promise(resolve => setTimeout(() => resolve(value), delay))
}

const asyncIterable = [
  promiseFactory('a', 900),
  promiseFactory('b', 200),
  promiseFactory('c', 300)
]

for await (const value of asyncIterable) {
  console.log('➡', value)
}

