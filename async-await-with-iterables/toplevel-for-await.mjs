const asyncIterable = [
  Promise.resolve('a'),
  Promise.resolve('b'),
  Promise.resolve('c')
]

for await (const value of asyncIterable) {
  console.log(value)
}
