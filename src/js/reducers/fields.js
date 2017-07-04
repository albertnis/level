import { EDIT_CONTENT } from '../constants/actions'

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

        default:
            return state
    }
}

export default fields
