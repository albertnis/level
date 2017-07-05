import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import appReducer from '../../js/reducers/index.js'
import App from '../../js/components/App.jsx'
import Field from '../models/field'
//import initialState from '../store.js'

const renderFullPage = (html, preloadedState) => {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Level</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900|Didact+Gothic|PT+Sans" rel="stylesheet">
        <link href="static/main-output.css" rel="stylesheet">
        <link href="static/favicon.png" rel="icon">
    </head>
    <body>
        <div id="app">${html}</div>
        <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="static/front-output.js"></script>
    </body>
</html>`
}

export const miniFront = (initialState,res) => {
    const store = createStore(appReducer, initialState)

    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )

    const preloadedState = store.getState()

    res.send(renderFullPage(html, preloadedState))
}

export const handleRender = (req, res) => {
    Field.find({}, 'id_str content', function(err, fields) {
        if (err) {console.log(err)}
        miniFront(makeInitialState(req, fields),res)
    })
}

const makeInitialState = (req, all_fields) => {
    var auth_loggedIn = req.isAuthenticated()
    console.log(auth_loggedIn)
    var auth_username = req.isAuthenticated() ? req.user.local.username : null
    console.log('ALL FIELDS:',all_fields)
    return {
        push: {
            pushing: false,
            success: true,
            editing: null,
            spellcheckEnabled: true
        },
        auth:
        {
            loggedIn: auth_loggedIn,
            isLoggingIn: false,
            username: auth_username,
            message: 'Enter username and password to log in'
        },
        fields: all_fields
    }
}
