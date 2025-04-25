const express = require('express')
const route = express.Router()
const {getTest} = require('../controllers/testController')

route.get('/', getTest)

module.exports = route;