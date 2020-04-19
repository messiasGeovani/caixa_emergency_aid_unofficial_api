// routes file
const express = require('express')
const routes = express.Router()

// register info controller
const rankController = require('./controllers/rankController')

routes.post('/evaluation', rankController.getRegisterInfo)

module.exports = routes