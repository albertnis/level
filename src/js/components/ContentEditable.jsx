import React from 'react'
import ReactDOM from 'react-dom'

class ContentEditable extends React.Component {
    constructor(props) {
        super(props)
        this.emitChange = this.emitChange.bind(this)
        this.lastHtml = null
    }

    render() {
        console.log('Rendering ContentEditable', this.props)
        return (
            <div id="contenteditable"
                   onInput={this.emitChange}
                   onBlur={this.emitChange}
                   contentEditable={this.props.contentEditable}
                   dangerouslySetInnerHTML={{__html: this.props.html}}></div>
            )
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.html !== ReactDOM.findDOMNode(this).innerHTML
    }

    componentDidUpdate() {
        if ( this.props.html !== ReactDOM.findDOMNode(this).innerHTML ) {
            ReactDOM.findDOMNode(this).innerHTML = this.props.html
        }
    }

    emitChange() {
        // Pass new value to parent for dispatch
        var html = ReactDOM.findDOMNode(this).innerHTML;
        console.log('---!ContentEditable emitted change', this.props)
        if (this.props.onChange && html !== this.lastHtml) {
            this.props.onChange({
                target: {
                    value: html
                }
            });
        }
        this.lastHtml = html
    }
}

export default ContentEditable
