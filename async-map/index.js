const list = [{ key: 1 }, { key: 2 }, { key: 3 }]

const result = list.map(async item => {
  return item.key
})

console.log(`Result: ${result}`)

Promise.all(result)
  .then(completed => console.log(`Result: ${completed}`))
