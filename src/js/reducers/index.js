import { combineReducers } from 'redux'
import fields from './fields'
import auth from './auth'

const appReducer = combineReducers({
    fields,
    auth
})

export default appReducer
