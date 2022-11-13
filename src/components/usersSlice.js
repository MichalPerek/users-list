import {createSlice, current} from "@reduxjs/toolkit";


const initialState = {
    users: [],
    usersFiltered: [],
    userToBeFired: {}
}


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

        updateUsers(state, action) {
            state.users = state.users.concat(action.payload)
        },
        setFiredUser(state, action) {
            const test = action.payload
            state.userToBeFired = state.users.filter(user => user.name.last.toLowerCase().includes(action.payload.toLowerCase()))

            console.log("test ", test)
        },
        removeFiredUser(state, action) {

            const newUsers = state.users.filter(user => user.name.last !== action.payload[0].name.last)
            state.users = newUsers


        }

    }
})


export const {
    updateUsers,
    setFiredUser,
    removeFiredUser
} = usersSlice.actions

export default usersSlice.reducer