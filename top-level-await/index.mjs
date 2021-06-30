import { readFile } from 'fs/promises'

// top level await is available since Node.js v14.8
const filePath = new URL('../data/myData.txt', import.meta.url)
const fileContent = await readFile(filePath, 'utf8')

console.log(fileContent)