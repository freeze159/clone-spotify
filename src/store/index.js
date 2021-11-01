import { configureStore } from "@reduxjs/toolkit";
import userSlice from './auth-slice'
import songSlice from './song-slice'

const store = configureStore({
    reducer: { user: userSlice.reducer, song:songSlice.reducer }
})

export default store;