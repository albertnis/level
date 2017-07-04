import { connect } from 'react-redux'
import { editContent } from '../actions'
import { requestLogin } from '../actions'
import LoginForm from '../components/LoginForm.jsx'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn,
        isLoggingIn: state.auth.username,
        message: state.auth.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (username, password) => {
            console.log('LoginFormContainer.jsx: Received submit:', username, password)
            dispatch(requestLogin(username, password))
        }
    }
}

const LoginFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)

export default LoginFormContainer
