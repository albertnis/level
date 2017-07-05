import {
    EDIT_CONTENT,
    FOCUS_CONTENT,
    BLUR_CONTENT,
    CONTENT_PUSH__SUCCESS,
    CONTENT_PUSH__FAILURE,
    SWITCH_SPELLCHECK
} from '../constants/actions'

const push = (state = {}, action) => {
    switch (action.type){
        case EDIT_CONTENT:
            return Object.assign({}, state, {
                pushing: true,
                success: null
            })
        case FOCUS_CONTENT:
            return Object.assign({}, state, {
                editing: action.id_str
            })
        case BLUR_CONTENT:
            return Object.assign({}, state, {
                editing: null
            })
        case SWITCH_SPELLCHECK:
            return Object.assign({}, state, {
                spellcheckEnabled: action.spellcheckEnabled
            })
        case CONTENT_PUSH__SUCCESS:
        case CONTENT_PUSH__FAILURE:
            return Object.assign({}, state, {
                pushing: false,
                success: action.success
            })
        default:
            return state
    }
}

export default push
