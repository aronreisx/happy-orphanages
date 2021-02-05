//importing express lib
const express = require('express')

//new lib for resolve different path's OS problems
const path = require('path')

//import module paaes.js
const pages = require('./pages.js')

//express function as a constant
const server = express()

//calling function inside const
server

//function for using static files
.use(express.static('public'))

//setting template engine up
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//application routes
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)

//starting server at specified port
server.listen(5500)