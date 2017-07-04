import { combineEpics, createEpicMiddleware } from 'redux-observable'
import editContentEpic from './fields'
import authEpic from './auth'

const appEpic = combineEpics(
    editContentEpic,
    authEpic
)

const appEpicMiddleware = createEpicMiddleware(appEpic)

export default appEpicMiddleware
