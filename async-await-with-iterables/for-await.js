function promiseFactory(value, delay = 0) {
  return new Promise(resolve => setTimeout(() => resolve(value), delay))
}

const promises = [
  promiseFactory('a', 100),
  promiseFactory('b', 1000),
  promiseFactory('c', 10),
]

async function loopingDirect() {
  for (const item of promises) {
    console.log(item)
  }
}

async function loopingForAwait() {
  for await (const item of promises) {
    console.log(item)
  }
}

loopingDirect()
loopingForAwait()
