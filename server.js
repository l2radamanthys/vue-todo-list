const express = require("express")
const serveStatic = require("serve-static")
const path = require("path")

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/static')))
const port = process.env.PORT || 8001
app.listen(port)

console.log("Escuchando el puerto:" + port)
