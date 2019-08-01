const promises = [
  new Promise(resolve => resolve(1)),
  new Promise(resolve => resolve(2)),
  new Promise(resolve => resolve(3))
]

async function test1() {
  for (const item of promises) {
    console.log(item)
  }
}

async function test2() {
  for await (const item of promises) {
    console.log(item)
  }
}

test1()
test2()