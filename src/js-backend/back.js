// Module imports
var path = require('path')
var Express = require('express')
const app = Express()
var session = require('express-session')
var CookieParser = require('cookie-parser')
var BodyParser = require('body-parser')
var passport = require('passport')
require('./config/passport')(passport)
var flash = require('connect-flash')
var Morgan = require('morgan')
const mongoose = require('mongoose');

// File imports
var configdb = require('./config/database')
import { handleRender } from './views'
import dbConnect from './db'
import contentpush from './routines/contentpush'

var User = require('./models/user');

// Express setup

const port = 3000

dbConnect(configdb.url)

app.use(Morgan('dev'))
app.use(CookieParser('foo'))
app.use(BodyParser())

app.use(session({ secret:'foo', cookie: {maxAge: 24*60*60*1000} }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

/*var newUser = new User()
newUser.local.username = 'albertnis'
newUser.local.password = newUser.generateHash('react')
newUser.save()*/

// Login handler
app.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
        req.logIn(user, function (err) {
            return res.send(info)
        });
    })(req, res, next)
})

app.get('/logout', function(req, res, next) {
    req.logOut()
    res.redirect('/')
})

app.get('/contentpush', contentpush)

app.get('/testauth', function(req, res, next) {
    return res.send({ loggedIn: req.isAuthenticated() })
})

// Static routing
app.use('/static', Express.static('public'))

// Render handler
app.get('/', handleRender)

// Launch
console.log('Listening on port', port)
app.listen(port)
