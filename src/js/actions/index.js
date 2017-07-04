import axios from 'axios'
import { EDIT_CONTENT,
        LOGIN__REQUEST, LOGIN__SUCCESS, LOGIN__FAILURE,
        CONTENT_PUSH__SUCCESS, CONTENT_PUSH__FAILURE } from '../constants/actions'

// Content editing (local state)

export const editContent = (id_str, content) => {
    var out = { type: EDIT_CONTENT, id_str, content }
    console.log('actions/index.js: Received editContent dispatch:', out)
    return out
}

// Content push

export const receiveContentPush = (response) => {

    console.log('contentpushresponse',response)
    var success = response.success
    return {
        type: success ? CONTENT_PUSH__SUCCESS : CONTENT_PUSH__FAILURE,
        success: response.success
    }
}

// Authorisation

export const requestLogin = (username, password) => {
    return {
        type: LOGIN__REQUEST,
        username,
        password
    }
}

export const receiveLogin = (response) => {
    console.log('loginresponse:',response)
    var loggedIn = response.loggedIn
    return {
        type: loggedIn ? LOGIN__SUCCESS : LOGIN__FAILURE,
        message: response.message,
        username: response.username,
        loggedIn: response.loggedIn
    }
}

/*export const login = (username, password) => {
    return dispatch => {
        dispatch(requestLogin(username, password))
        return axios.post(`/login?username=${username}&password=${password}`)
            .then(response => dispatch(receiveLogin(username, response)))
    }

}*/

// Content pull
