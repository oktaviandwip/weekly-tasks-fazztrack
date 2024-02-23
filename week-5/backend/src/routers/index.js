const express = require('express')
const routers = express.Router()

const auth = require('./auth')
const movies = require('./movies')
const schedules = require('./schedules')
const bookings = require('./bookings')
const users = require('./users')
const tickets = require('./tickets')

routers.use('/auth', auth)
routers.use('/movies', movies)
routers.use('/schedules', schedules)
routers.use('/bookings', bookings)
routers.use('/users', users)
routers.use('/tickets', tickets)

module.exports = routers