import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../feature/auth/usersSlice'


export const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

