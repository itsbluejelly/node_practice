const { error } = require('console')
const fs = require('fs')
const fileName = 'target.txt'

fs.readFile(fileName, (error, data) => {
    if(error){
        console.log(error)
    }
    console.log(data.toString())
})

console.log("hhh")
