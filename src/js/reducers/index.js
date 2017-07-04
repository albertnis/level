import { combineReducers } from 'redux'
import fields from './fields'
import auth from './auth'
import push from './push'

const appReducer = combineReducers({
    fields,
    auth,
    push
})

export default appReducer
