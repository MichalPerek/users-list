import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    users: []
}


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

        updateUsers(state, action) {
            state.users = state.users.concat(action.payload)
        }

    }
})


export const {
    updateUsers
} = usersSlice.actions

export default usersSlice.reducer