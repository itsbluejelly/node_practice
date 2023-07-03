const express = require('express')
const app = express()
const port = 5500

app.get('/', (request, response) => response.send("Hello World Node Js"))
app.listen(port, console.log("I made it"))