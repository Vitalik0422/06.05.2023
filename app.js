
const express = require('express')
const server = express()
const ejs = require('ejs')
const PORT = 8001;

const validRoute = require('./routes/valid')

server.set('view engine','ejs')
server.set('views', __dirname + '/views')
server.use(express.static(__dirname + '/public'))

server.use(express.json())
server.use(express.urlencoded({extended: false}))

server.use('/',validRoute)


server.listen(PORT)
