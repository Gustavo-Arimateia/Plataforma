const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(require('./routes'))

module.exports = app