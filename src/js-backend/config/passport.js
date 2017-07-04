var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

module.exports = (passport) => {

    // Session setup
    passport.serializeUser(function(user, done) {
        console.log('SERIALISING USER');
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        console.log('DESERIALISING USER');
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // Local signup
    passport.use('local-login', new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, username, password, done) {
        User.findOne({'local.username': username}, function(err, user) {
            if (err)
                return done(err);

            if (!user)
                return done(null, false, {'loggedIn':false,'message':'User does not exist'});

            if (!user.validPassword(password))
                return done(null, false, {'loggedIn':false,'message':'Incorrect password'});

            return done(null, user, {'loggedIn':true,'message':'Login successful',username});
        })
    }
    ))

};
