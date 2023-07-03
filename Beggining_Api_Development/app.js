const express = require('express')
const postRoutes = require('./routes/postRoutes')
const app = express()
const port = 5500

app.get('/', postRoutes.firstPost)
app.listen(port, console.log("I made it"))