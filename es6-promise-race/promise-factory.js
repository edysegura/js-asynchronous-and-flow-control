export const promiseFactory = (name, time) => {
  return new Promise((resolve) => {
      setTimeout(() => resolve(`The ${name}º has been returned first! 🎉`), time)
  })
}

export const randomTime = () => (""+Math.random()).substr(2,2)