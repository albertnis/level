import mongoose from 'mongoose'
import Field from './models/field'

const initialState = (req) => {
    var auth_loggedIn = req.isAuthenticated()
    console.log(auth_loggedIn)
    var auth_username = req.isAuthenticated() ? req.user.local.username : null
    var all_fields = Field.find({}).select({id_str:1,content:1}).exec()
    console.log('ALL FIELDS:',all_fields)
    return {
        push: {
            pushing: false,
            success: true
        },
        auth:
            {
                loggedIn: auth_loggedIn,
                isLoggingIn: false,
                username: auth_username,
                message: null
            },
        fields: [
            {
                content: "A New Site",
                id_str: "main-header"
            },
            {
                content: "Subtitle here yet again",
                id_str: "sub-header"
            }
        ]
    }
}

export default initialState
