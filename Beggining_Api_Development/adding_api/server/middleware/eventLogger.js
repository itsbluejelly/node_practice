const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises
const {format} = require('date-fns')
const {v4 : uuid} = require('uuid')

async function eventLogger(message1, message2, fileName){
    const dateTime = `${format(new Date(), `do-MMM-yyyy\thh:mm:ss aaaa`)}`
    const loggedItem = `${dateTime}\t${uuid()}\t${message1}\t${message2}\n`

    try{
        if(!fs.existsSync(path.join(__dirname, '..', 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }

        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', fileName), loggedItem)
        console.log(loggedItem)
    }catch(error){
        try{
            const errorItem = `${dateTime}\t${uuid()}\t${error.name}\t${error.message}\n`

            if(!fs.existsSync(path.join(__dirname, '..', 'logs'))){
                await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
            }

            await fsPromises.appendFile(path.join(__dirname, '..', 'logs', 'errorLogs.txt'), errorItem)
            console.log(errorItem)
        }catch(errorLocale){
            console.log(`${dateTime}\t${uuid()}\t${errorLocale.name}\t${errorLocale.message}\n`)
        }
    }
}

module.exports = {
    eventLogger
}