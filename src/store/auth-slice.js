import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    playlist: [],
    profile: null,
    discover_weekly:null
}
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload
        },
        setPlaylist(state, action) {
            state.playlist = action.payload
        },
        setProfile(state, action) {
            state.profile = action.payload
        },
        setDiscoverWeekly(state, action){
            state.discover_weekly = action.payload
        }
    }

})

export const userAction = userSlice.actions
export default userSlice