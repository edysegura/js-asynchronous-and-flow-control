'use strict'

async function main() {
  const asyncIterable = [
      Promise.resolve('a'),
      Promise.resolve('b'),
  ]

  for await (const value of asyncIterable) {
      console.log(value)
  }
}
main()

// Output:
// a
// b