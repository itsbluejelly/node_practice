const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const {rootRouter} = require('./routers/rootRouter')
const {format} = require('date-fns')

const port = process.env.port || 8080
const dateTime = `${format(new Date(), `do-MMM-yyyy\thh:mm:ss aaaa`)}`

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGO_URI)
    .then(console.log(`${dateTime}\tConnection to MongoDB successful`))

mongoose.connection.on(
    "error", 
    err => console.log(`${dateTime}\t${err.name}\t${err.message}`)
)

app.use("/", rootRouter)

app.listen(port, () => console.log(`server running on port ${port}`))