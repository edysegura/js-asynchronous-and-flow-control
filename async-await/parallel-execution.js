// https://jsbin.com/vifohocepa/edit?js,console

function amplitude() {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log('1- amplitude execution')
      resolve()
    }, 100)
  )
}

function mongodb() {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log('2- mongodb execution')
      resolve()
    }, 50)
  )
}

async function test1() {
  console.log('----> with await')
  await amplitude()
  await mongodb()
}

async function test2() {
  console.log('----> without await')
  amplitude()
  await mongodb()
}

async function main() {
  await test1()
  await test2()
}

main()