const {
  readData,
  writeData,
  addToLog,
  notifyOnSuccess,
  notifyOnError
} = require('../commons/promises')

async function main() {
  try {
    const fileContent = await readData('../data/myData.txt')
    const result = await writeData(fileContent)
    await addToLog(result)
    notifyOnSuccess()
  } catch (error) {
    notifyOnError(error)
  }
}

main()
