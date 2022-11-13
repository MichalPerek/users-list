import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    users: [],
    usersFiltered: [],
    usersToFire: [],
    usersToKeep: [],
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
        updateFilteredUsers(state) {
            state.usersFiltered = state.users
        },
        setFiredUser(state, action) {
            state.userToBeFired = state.users.filter(user => user.userId === action.payload)
        },
        fireUser(state, action) {
            const userToBeFired = state.users.filter(user => user.userId === action.payload)
            userToBeFired[0].status = 'fired'
            let canAddCurrentUser = true
            state.usersToFire.forEach((element) => {
                if (element.userId === action.payload) {
                    canAddCurrentUser = false
                }
            })

            state.usersToKeep.forEach((element) => {
                if (element.userId === action.payload) {
                    canAddCurrentUser = false
                }
            })

            if (canAddCurrentUser) {
                state.usersToFire.push(userToBeFired[0])
            }
        },
        keepUser(state, action) {
            const userToKeep = state.users.filter(user => user.userId === action.payload)
            userToKeep[0].status = 'keep'
            let canAddCurrentUser = true
            state.usersToKeep.forEach((element) => {
                if (element.userId === action.payload) {
                    canAddCurrentUser = false
                }
            })

            state.usersToFire.forEach((element) => {
                if (element.userId === action.payload) {
                    canAddCurrentUser = false
                }
            })

            if (canAddCurrentUser) {
                state.usersToKeep.push(userToKeep[0])
            }
        },
        setUserToKeep(state, action) {
            state.usersToKeep = state.users.filter(user => user.userId === action.payload)
        }

    }
})


export const {
    updateUsers,
    setFiredUser,
    fireUser,
    keepUser,
    updateFilteredUsers
} = usersSlice.actions

export default usersSlice.reducer