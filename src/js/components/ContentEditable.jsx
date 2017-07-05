import React from 'react'
import ReactDOM from 'react-dom'

class ContentEditable extends React.Component {
    constructor(props) {
        super(props)
        this.emitChange = this.emitChange.bind(this)
        this.lastHtml = null
    }

    render() {
        return (
            <div id="contenteditable"
                   className={this.props.className}
                   ref={(ce) => {this.ceEl = ce }}
                   onInput={this.emitChange}
                   onBlur={this.props.onBlur}
                   onFocus={this.props.onFocus}
                   contentEditable={this.props.contentEditable}
                   spellCheck={this.props.spellCheck}
                   dangerouslySetInnerHTML={{__html: this.props.html}}></div>
            )
    }

    shouldComponentUpdate(nextProps) {
        var contentChanged = nextProps.html !== ReactDOM.findDOMNode(this).innerHTML

        var permissionsChanged = false;
        if (typeof nextProps.contentEditable !== undefined) {
            permissionsChanged = this.ceEl.getAttribute('contenteditable') != nextProps.contentEditable.toString()
        }

        var spellcheckChanged = this.ceEl.getAttribute('spellcheck') != nextProps.spellCheck.toString()

        return contentChanged || permissionsChanged || spellcheckChanged
    }

    componentDidUpdate() {
        if ( this.props.html !== ReactDOM.findDOMNode(this).innerHTML ) {
            ReactDOM.findDOMNode(this).innerHTML = this.props.html
        }
    }

    emitChange() {
        // Pass new value to parent for dispatch
        var html = ReactDOM.findDOMNode(this).innerHTML;
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
