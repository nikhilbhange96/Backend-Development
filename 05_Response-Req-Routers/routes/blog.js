const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Home page')
})

router.get('/about', (req, res) => {
    res.send('About page')
})

router.get('/blogpost/:slug', (req, res) => {
    res.send(`Welcome to ${req.params.slug}` )
})


module.exports = router