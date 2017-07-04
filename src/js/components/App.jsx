import React from 'react'
import connect from 'react-redux'
import FieldContainer from '../Containers/FieldContainer.jsx'
import LoginFormContainer from '../Containers/LoginFormContainer.jsx'

const App = () => (
    <div>
        <FieldContainer id_str="main-header" />
        <FieldContainer id_str="sub-header" />
        <LoginFormContainer />
    </div>
)

export default App
