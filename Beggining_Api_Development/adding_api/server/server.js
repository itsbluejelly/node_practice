const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const {connectDB} = require('./config/connectDb')
const {rootRouter} = require('./routers/rootRouter')

const port = process.env.port || 8080

const app = express()
dotenv.config()
connectDB()

app.use("/", rootRouter)

mongoose.connection.once("open", () => {
    app.listen(port)
})