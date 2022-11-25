import {configureStore} from "@reduxjs/toolkit";
import usersReducer from '../feature/users/usersSlice'
import authReducers from '../feature/auth/authSlice'


export const store = configureStore({
    reducer: {
        users: usersReducer,
        auth: authReducers
    }
})

