const path = require('path')
const express = require('express')
const compression = require('compression')
const morgan = require('express')

const universal = require('./universal')

const app = express()

app.use(compression())
app.use(morgan('combined'))

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.use('/', universal)

module.exports = app