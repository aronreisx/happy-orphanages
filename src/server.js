//importing express lib
const express = require('express')

//new lib for resolve different path's OS problems
const path = require('path')

//express function as a constant
const server = express()

//calling function inside const
server

//function for using static files
.use(express.static('public'))

//setting template engine up
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//creating a route
.get('/', (request, response) => {
    //Tradicional way(that will no be used): sending the html to browser when resquested
    /* return response.sendFile(path.join(__dirname, 'views', 'index.html')) */
    
    //Set response as a hbs's rendering
    return response.render('index')
})

//starting server at specified port
server.listen(5500)