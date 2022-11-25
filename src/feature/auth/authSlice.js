import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    user: null,
    authenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        logIn(state, action) {

            const user = action.payload

            state.authenticated = true
            state.user = user
        },

        logOut(state) {

            state.authenticated = false
            state.user = null
        },


    }
})

export const {
    logIn,
    logOut
} = authSlice.actions

export default authSlice.reducer