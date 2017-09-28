const fs = require('fs')

function stats(file) {
    return new Promise((resolve, reject) => {
        fs.stat(file, (error, data) => {
            if (error) reject(error)
            else resolve(data)
        })
    })
}

Promise.all([
    stats('../data/myData.txt'),
    stats('../data/myLog.txt')
])
.then(data => console.log(data))
.catch(error => console.log(error))