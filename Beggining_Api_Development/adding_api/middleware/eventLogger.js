const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises
const {format} = require('date-fns')
const {v4 : uuid} = require('uuid')

const eventLogger = async (message, fileName) => {
    const dateTime = `${format(new Date(), `do-MMM-yyyy\thh:mm:ss aaaa`)}`
    const loggedItem = `${dateTime}\t${uuid()}\t${message.path}\t${message.method}\n`
    console.log(loggedItem)

    try{
        if(!fs.existsSync(path.join(__dirname, '..', 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }

        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', fileName), loggedItem)
    }catch(error){
        try{
            if(!fs.existsSync(path.join(__dirname, '..', 'logs'))){
                await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
            }
        }catch(error){
            console.log(error)
        }

        const errorItem = `${dateTime}\t${uuid()}\t${error.name}\t${error.message}\n`
        console.log(errorItem)
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', 'errorLogs.txt'), errorItem)
    }
}

module.exports = {
    eventLogger
}