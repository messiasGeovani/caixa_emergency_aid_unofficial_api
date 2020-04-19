//  App module
const express = require('express')
const app = express()

// cors config
const cors = require('cors')

// routes
const routes = require('./routes')

// app config
app.use(express.json())
app.use(cors())
app.use(routes)

// 404 error config
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Not found.'
    })
})

module.exports = app