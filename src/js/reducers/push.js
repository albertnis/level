import {
    EDIT_CONTENT,
    CONTENT_PUSH__SUCCESS,
    CONTENT_PUSH__FAILURE
} from '../constants/actions'

const push = (state = {}, action) => {
    switch (action.type){
        case EDIT_CONTENT:
            console.log('push reducer received action')
            return Object.assign({}, state, {
                pushing: true
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
