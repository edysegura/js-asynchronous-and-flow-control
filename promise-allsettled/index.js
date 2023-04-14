const firstPromise = new Promise((resolve) => {
  setTimeout(resolve, 500, 'one')
})

const secondPromise = new Promise((_, reject) => {
  setTimeout(reject, 100, 'two')
})

const thirdPromise = new Promise((resolve) => {
  setTimeout(resolve, 200, 'three')
})

Promise.allSettled([firstPromise, secondPromise, thirdPromise]).then((data) =>
  console.log(data)
)
