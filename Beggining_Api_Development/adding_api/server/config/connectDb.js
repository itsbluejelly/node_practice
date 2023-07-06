const mongoose = require('mongoose')
const {eventLogger} = require('../middleware/eventLogger')
const port = process.env.port || 8080

const connectDB = async () => {
    try{
        await mongoose.connect(
            process.env.MONGO_URI,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        )
        eventLogger("Connection to MongoDB successful", `Server Listening To Port ${port}`, 'eventLogs.txt')
    }catch(error){
        eventLogger(error.name, error.message, 'errorLogs.txt')
    }
}

module.exports = {
    connectDB
}