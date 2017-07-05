import React from 'react'
import ReactDOM from 'react-dom'
import ContentEditable from '../components/ContentEditable.jsx'

class Field extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editable: true,
            content: props.field.content
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }

    handleInputChange(e) {
        this.setState({ content: e.target.value})

        // Pass new value to container for dispatch
        this.props.onContentChange(this.props.field.id_str, e.target.value)
    }

    handleInputFocus(e) {
        this.props.onInputFocus(this.props.field.id_str)
    }

    handleInputBlur(e) {
        this.props.onInputBlur()
    }

    render() {
        return (
            <ContentEditable className={this.props.field.id_str}
                             contentEditable={this.props.loggedIn}
                             spellCheck={this.props.spellcheckEnabled}
                             html={this.state.content}
                             onChange={this.handleInputChange}
                             onFocus={this.handleInputFocus}
                             onBlur={this.handleInputBlur}  />
        )
    }
}

export default Field
