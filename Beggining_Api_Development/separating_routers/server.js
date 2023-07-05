const express = require('express')
const {rootRouter} = require('./routers/rootRouter')
const port = process.env.port || 8080

const app = express()

app.use("/", rootRouter)

app.listen(port, () => console.log(`server running on port ${port}`))