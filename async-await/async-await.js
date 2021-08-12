import { readFile, writeFile, appendFile } from  'fs/promises'

async function readData(path) {
  const data = await readFile(path, 'utf8')
  return { path, data }
}

async function writeData(file) {
  const data = file.data + '\nnew content'
  await writeFile(file.path, data)
  return { path: file.path, data }
}

async function addToLog(file) {
  const date = new Date().toISOString()
  const logMessage = `[${date}] '${file.path}' has been changed\n`
  return appendFile('../data/myLog.txt', logMessage)
}

function notifyOnSuccess() {
  console.log('Process has been finished!')
}

function notifyOnError(error) {
  console.log('Process has been failed: ', error.message)
}

async function main() {
  try {
    const file = await readData('../data/myData.txt')
    await writeData(file)
    await addToLog(file)
    notifyOnSuccess()
  } catch (error) {
    notifyOnError(error)
  }
}

main()
