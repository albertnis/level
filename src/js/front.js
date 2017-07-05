// Module imports
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import axios from 'axios'

// File imports
import App from './components/App.jsx'
import appReducer from './reducers'
import appEpicMiddleware from './epics'

// Grab state as injected by server
const initialState = window.__PRELOADED_STATE__
console.log('front.js: Initial state obtained as', initialState)

// Initialise store
const loggerMiddleware = createLogger()
let store = createStore(
    appReducer,
    initialState,
    applyMiddleware(appEpicMiddleware,
                    thunkMiddleware,
                    loggerMiddleware
                   )
)
console.log('front.js: Store initialised', store.getState())

// Subscribe to store
/*store.subscribe(() => {
    console.log('Store changed', store.getState())
})*/

// Render app
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
