import { connect } from 'react-redux'
import { editContent, focusContent, blurContent } from '../actions'
import Field from '../components/Field.jsx'

const mapStateToProps = (state, ownProps) => {
    return {
        field: state.fields.filter(field => field.id_str == ownProps.id_str)[0],
        loggedIn: state.auth.loggedIn,
        spellcheckEnabled: state.push.spellcheckEnabled
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onContentChange: (id_str, text) => {
            dispatch(editContent(id_str, text))
        },

        onInputFocus: (id_str) => {
            dispatch(focusContent(id_str))
        },

        onInputBlur: () => {
            dispatch(blurContent())
        }
    }
}

const FieldContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Field)

export default FieldContainer
