import React from 'react'
import ReactDOM from 'react-dom'
import ContentEditable from '../components/ContentEditable.jsx'

class Field extends React.Component {
    constructor(props) {
        super(props)
        console.log("Field", props)
        this.state = {
            editable: true,
            content: props.field.content
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        console.log('Field.jsx: Received CE onChange:',e.target.value)
        this.setState({ content: e.target.value})

        // Pass new value to container for dispatch
        this.props.onContentChange(this.props.field.id_str, e.target.value)
    }

    render() {
        console.log('Rendering Field', this.props.field, this.state)
        return (
            <ContentEditable className={this.props.field.id_str}
                             contentEditable={this.state.editable}
                             html={this.state.content}
                             onChange={this.handleInputChange}  />
        )
    }
}

export default Field
