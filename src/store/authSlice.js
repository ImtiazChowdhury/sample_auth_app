
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isLoggedIn: false,
    userDetail: null,
    image: []
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.userDetail = action.payload;
            state.isLoggedIn = true;
        },
        logoutUser: (state) => {
            state.userDetail = null;
            state.isLoggedIn = false;
        },
        addImage: (state, action) => {
            state.image = [...(state.image || []), ...action.payload]
        },
    },
})

export const { loginUser, logoutUser, addImage } = authSlice.actions

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserDetail = (state) => state.auth.userDetail;
export const selectImage = (state) => state.auth.image;


export default authSlice.reducer