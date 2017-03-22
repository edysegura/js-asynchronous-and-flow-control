const fs = require('fs')

function stats(file) {
    return new Promise((resolve, reject) => {
        fs.stat(file, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

Promise.all([
    stats('../data/myData.txt'),
    stats('../data/myLog.txt')
])
.then((data) => console.log(data))
.catch((err) => console.log(err))