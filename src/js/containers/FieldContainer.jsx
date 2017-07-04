import { connect } from 'react-redux'
import { editContent } from '../actions'
import Field from '../components/Field.jsx'

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        field: state.fields.filter(field => field.id_str == ownProps.id_str)[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onContentChange: (id_str, text) => {
            console.log('FieldContainer.jsx: Received content change:', text)
            dispatch(editContent(id_str, text))
        }
    }
}

const FieldContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Field)

export default FieldContainer
