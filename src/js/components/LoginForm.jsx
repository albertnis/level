import React from 'react'
import ReactDOM from 'react-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            dialogOpen: false
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.logLinkClick = this.logLinkClick.bind(this)
        this.dialogClose = this.dialogClose.bind(this)
    }

    handleInputChange(e) {
        const value = e.target.value
        const name = e.target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.username, this.state.password)

    }

    dialogClose(e) {
        this.setState({dialogOpen: false})
    }

    logLinkClick(e) {
        if (this.props.loggedIn) {
            window.location.href = '/logout'
        }
        else {
            this.setState({dialogOpen: true})
            setTimeout(() => {
                document.getElementsByClassName('footerRow')[0].scrollIntoView(false)
            },20)
            this.userInput.focus()
        }

    }

    render() {
        return (

            <div className={this.state.dialogOpen && !this.props.loggedIn ? 'loginForm-wrapper loginForm-wrapper_open' : 'loginForm-wrapper'}>
                <div className="loginForm-tip">{this.props.message}</div>
                <form className="loginForm" onSubmit={this.handleSubmit} >
                    <input
                        name="username"
                        className="loginForm-usernameInput"
                        ref={(input) => {this.userInput = input}}
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleInputChange} />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange} />
                    <input
                        className="loginForm-submitButton"
                        type="submit"
                        value="Submit" />
                    <input
                        className="loginForm-cancelButton"
                        type="button"
                        value="Cancel"
                        onClick={this.dialogClose} />
                </form>
                <div className="loginForm-link" onClick={this.logLinkClick} >
                {this.props.loggedIn ? 'Logout' : 'Login'}
                </div>


            </div>
        )
    }
}

export default LoginForm
