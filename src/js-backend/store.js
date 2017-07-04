import mongoose from 'mongoose'

const initialState =
    {
        push: {
            pushing: false
        },
        auth:
            {
                loggedIn: false,
                isLoggingIn: false,
                username: null,
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

export default initialState
