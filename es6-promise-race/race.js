const firstPromise = new Promise((resolve, _) => {
  setTimeout(resolve, 500, 'one')
})

const secondPromise = new Promise((resolve, _) => {
  setTimeout(resolve, 100, 'two')
})

Promise.race([firstPromise, secondPromise]).then((data) => console.log(data))
