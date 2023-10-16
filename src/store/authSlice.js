
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isLoggedIn: false,
    userDetail: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.userDetail = action.payload;
            state.isLoggedIn = true;
        }
    },
})

export const { loginUser } = authSlice.actions

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserDetail = (state) => state.auth.userDetail;


export default authSlice.reducer