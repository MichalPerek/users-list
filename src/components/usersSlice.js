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

            const newUsers = action.payload

            newUsers.forEach((user) => {
                user.userId = Math.round(Math.random() * 1000000)
                user.grade = Math.round((Math.random() * 10 + 1))
                user.attendance = Math.floor((Math.random() * 100))
                user.salary = Math.floor((Math.random() * 1000 + 200))
                user.evaluation = Math.floor((Math.random() * 100))
                user.status = ""
            })

            state.users = state.users.concat(newUsers)
        },
        setFiredUser(state, action) {
            state.userToBeFired = state.users.filter(user => user.userId === action.payload)
        },
        removeFiredUser(state, action) {

            console.log(action.payload)
            console.log("id to delete, ", action.payload[0].userId)
            const newUsers = state.users.filter(user => user.userId !== action.payload[0].userId)
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