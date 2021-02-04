//importing express lib
const express = require('express')
const server = express()

//creating a route
server.get('/', (request, response) => {
    return response.send('Hello World')
})

//starting server at specified port
server.listen(5500)