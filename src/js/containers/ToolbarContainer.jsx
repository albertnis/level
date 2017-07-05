import { connect } from 'react-redux'
import { switchSpellCheck } from '../actions'
import Toolbar from '../components/Toolbar.jsx'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn,
        editing: state.push.editing,
        username: state.auth.username,
        pushing: state.push.pushing,
        success: state.push.success,
        spellcheckEnabled: state.push.spellcheckEnabled
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSpellChange: (spellcheck) => {
            dispatch(switchSpellCheck(spellcheck))
        }
    }
}

const ToolbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar)

export default ToolbarContainer
