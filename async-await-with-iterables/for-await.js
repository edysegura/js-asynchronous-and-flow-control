const promises = [
  new Promise(resolve => resolve(1)),
  new Promise(resolve => setTimeout(() => resolve(2), 100)),
  new Promise(resolve => resolve(3))
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
