import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import appReducer from '../../js/reducers/index.js'
import App from '../../js/components/App.jsx'
import initialState from '../store.js'

const renderFullPage = (html, preloadedState) => {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Level</title>
        <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Didact+Gothic|PT+Sans" rel="stylesheet">
        <link href="index.css" rel="stylesheet">
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

const handleRender = (req, res) => {
    const store = createStore(appReducer, initialState)

    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )

    const preloadedState = store.getState()

    res.send(renderFullPage(html, preloadedState))
}

export default handleRender
