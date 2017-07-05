import React from 'react'
import connect from 'react-redux'
import FieldContainer from '../Containers/FieldContainer.jsx'
import LoginFormContainer from '../Containers/LoginFormContainer.jsx'
import ToolbarContainer from '../Containers/ToolbarContainer.jsx'

const App = () => (
    <div>
        <ToolbarContainer />

        <div className="heroRow">
            <div className="logo">
                <img src="static/logo.svg" />
            </div>
           <FieldContainer id_str="main-header" />
           <FieldContainer id_str="sub-header" />
        </div>
        <div className="aboutRow">
           <div className="about-content-wrapper">
            <FieldContainer id_str="about-content" />
            </div>
        </div>
        <div className="interactRow">
            <div className="interact-wrapper">
                <div className="work-wrapper">
                    <FieldContainer id_str="work-header" />
                    <FieldContainer id_str="work-content" />
                </div>
                <div className="thought-wrapper">
                    <FieldContainer id_str="thought-header" />
                    <FieldContainer id_str="thought-content" />
                </div>
            </div>
        </div>
        <div className="contactRow">
            <FieldContainer id_str="contact-header" />
            <a href="https://facebook.com">Facebook</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://youtube.com">YouTube</a>
            <a href="https://linkedin.com">LinkedIn</a>
        </div>
        <div className="footerRow">
           <FieldContainer id_str="footer-content" />
           <LoginFormContainer />
        </div>
    </div>
)

export default App
