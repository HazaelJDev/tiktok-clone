import {
    configureStore,
    createSlice
} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: ''
    },
    reducers: {
        signIn: (state, action) => {
            state.user = action.payload;
        },
        logOut: (state) => {
            state.user = null;
        }
    }
})

export const { signIn, logOut } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})