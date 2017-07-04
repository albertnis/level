import React from 'react'
import ReactDOM from 'react-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(e) {
        const value = e.target.value
        const name = e.target.name
        console.log('---!LoginForm emitted change')
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log('---!LoginForm emitted submit')
        this.props.onSubmit(this.state.username, this.state.password)

    }

    render() {
        return (
            <div className="loginForm-wrapper">
                <form className="loginForm" onSubmit={this.handleSubmit} >
                    <input
                        name="username"
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
                        name="password"
                        type="submit"
                        value="Submit" />
                </form>
            </div>
        )
    }
}

export default LoginForm
