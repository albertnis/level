import { EDIT_CONTENT, FOCUS_CONTENT, BLUR_CONTENT,
        LOGIN__REQUEST, LOGIN__SUCCESS, LOGIN__FAILURE,
        CONTENT_PUSH__SUCCESS, CONTENT_PUSH__FAILURE,
        SWITCH_SPELLCHECK } from '../constants/actions'

// Content editing (local state)

export const editContent = (id_str, content) => {
    var out = { type: EDIT_CONTENT, id_str, content }
    return out
}

export const focusContent = (id_str, content) => {
    var out = { type: FOCUS_CONTENT, id_str }
    return out
}

export const blurContent = (id_str, content) => {
    var out = { type: BLUR_CONTENT }
    return out
}

export const switchSpellCheck = (spellcheck) => {
    document.body.setAttribute('spellcheck', spellcheck);
    return {
        type: SWITCH_SPELLCHECK,
        spellcheckEnabled: spellcheck
    }
}

// Content push

export const receiveContentPush = (response) => {

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
    var loggedIn = response.loggedIn
    return {
        type: loggedIn ? LOGIN__SUCCESS : LOGIN__FAILURE,
        message: response.message,
        username: response.username,
        loggedIn: response.loggedIn
    }
}
