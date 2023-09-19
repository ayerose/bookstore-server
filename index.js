
const express = require('express')
const server = express()
const port = 3000

const adminData = require("./routes/admin")
const bookRoutes = require("./routes/book")

server.get('/', (req, res) => {
    res.send('Hey')
})
// Middleware 

server.use("/", bookRoutes)


server.listen(port, () => {
    console.log(`server running on port: ${port}`)
})