const express = require('express')
const router = express.Router()

const books = []
router.get('/', (req,res) => {
    res.send('Hello world')
})

module.routes = router
module.books = books