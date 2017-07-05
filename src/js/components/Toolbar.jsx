import React from 'react'
import ReactDOM from 'react-dom'

class Toolbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            spellcheckEnabled: props.spellcheckEnabled
        }
        this.handleSpellCheckToggle = this.handleSpellCheckToggle.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleSpellCheckToggle(e) {
        this.setState({spellcheckEnabled: e.target.checked})
        this.props.onSpellChange(e.target.checked)
    }

    handleLogout(e) {
        window.location.href = '/logout'
    }

    render() {
        if (this.props.loggedIn) {
            var statusClass = 'toolbar-syncStatus'
            var statusStr = 'Changes saved'
            if (this.props.pushing) {
                statusClass += ' toolbar-syncStatus_pushing'
                statusStr = 'Saving changes'
            }
            else if (this.props.success) {
                statusClass += ' toolbar-syncStatus_good'
                statusStr = 'Changes saved'
            }
            else {
                statusClass += ' toolbar-syncStatus_warn'
                statusStr = 'An error occurred: ' + this.props.message
            }

            var editingClass = 'toolbar-editArea'
            var editingStr = 'Select a field to edit'
            if (this.props.editing) {
                editingClass += ' toolbar-editArea_editing'
                editingStr = 'Editing: ' + this.props.editing
            }

            return (
                <div className="toolbar-outer toolbar-outer_auth">
                <div className="toolbar toolbar_auth">
                    <div className={editingClass}>
                        {editingStr}
                    </div>
                    <div className="toolbar-statusArea">
                        <div className={statusClass}>
                            <div className="toolbar-statusArea-text">{statusStr}</div>
                            <div className="toolbar-spellCheck">
                                <input type="checkbox"
                                    id="toolbar-spellCheck-box"
                                    className="toolbar-spellCheck-box"
                                    checked={this.state.spellcheckEnabled}
                                    onChange={this.handleSpellCheckToggle}
                                    />
                                <label htmlFor="toolbar-spellCheck-box"
                                    className="toolbar-spellCheck-label">Spellcheck (beta)</label>
                                <div className="toggleSlider"></div>
                            </div>

                        </div>
                    </div>
                    <div className="toolbar-userArea">
                        {this.props.username}&nbsp;
                        <div onClick={this.handleLogout} className="toolbar-logout">Logout</div>
                    </div>


                </div>
                </div>
            )
        }
        else {
            return (
                <div className="toolbar-outer"><div className="toolbar"></div></div>
            )
        }
    }
}

export default Toolbar
