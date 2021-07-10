const promises = [
  new Promise(resolve => setTimeout(() => resolve(1), 500)),
  new Promise(resolve => setTimeout(() => resolve(2), 300)),
  new Promise(resolve => setTimeout(() => resolve(3), 100))
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
