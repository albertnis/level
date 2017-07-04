import { EDIT_CONTENT, EDIT_CONTENT__AJAX } from '../constants/actions'

const field = (state = {}, action) => {
    switch (action.type) {
        case EDIT_CONTENT:
            if (state.id_str !== action.id_str) {
                return state
            }
            return Object.assign({}, state, {
                content: action.content
            })

        default:
            return state
    }
}

const fields = (state = {}, action) => {
    switch (action.type) {
        case EDIT_CONTENT:
            return state.map(f =>
                field(f, action))

        case EDIT_CONTENT__AJAX:
            //TODO: Implement AJAX
            console.log('reducers/fields.js: Dispatching AJAX request:', action)

        default:
            return state
    }
}

export default fields
