const express = require('express')
const router = express.Router()

router.get('/add-book', (req,res) => {
    res.send('Add book:')
})

module.exports = router