const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

function readData(filename) {
  const createMessage = data => ({ filename, data });
  return readFile(filename, 'utf-8').then(createMessage);
}

function writeData(file) {
  const data = file.data + '\nnew content';
  const createMessage = () => ({ filename: file.filename });
  return writeFile(file.filename, data).then(createMessage);
}

function addToLog(data) {
  const logMessage = `${data.filename} has been changed`
  return writeFile('my-log.txt', logMessage)
}

function notifyOnSuccess() {
  console.log('Process has been finished!')
}

function notifyOnError(error) {
  console.log('Process has been failed: ')
  console.log(error.message)
}

async function main() {
  try {
    const file = await readData('my-file.txt');
    const result = await writeData(file);
    await addToLog(result);
    notifyOnSuccess();
  } catch (error) {
    notifyOnError(error);
  }
}

main();
