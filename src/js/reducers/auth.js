import { LOGIN__REQUEST, LOGIN__SUCCESS, LOGIN__FAILURE } from '../constants/actions'

const auth = (state = {}, action) => {
    switch (action.type){
        case LOGIN__REQUEST:
            return Object.assign({}, state, {
                isLoggingIn: true
            })
        case LOGIN__SUCCESS:
            return Object.assign({}, state, {
                loggedIn: true,
                isLoggingIn: false,
                username: action.username,
                message: action.message
            })
        case LOGIN__FAILURE:
            return Object.assign({}, state, {
                loggedIn: false,
                isLoggingIn: false,
                username: action.username,
                message: action.message
            })
        default:
            return state
    }
}

export default auth
