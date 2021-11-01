import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchRes: null,
    playlist: null,
    isPlaying: false,
    item: null,
}
const songSlice = createSlice({
    name: 'songSlice',
    initialState,
    reducers: {
        setSearchRes(state, action) {
            state.searchRes = action.payload
        },
        setPlaylist(state, action) {
            state.playlist = action.payload
        },
        setPlaying(state) {
            state.isPlaying = true
        },
        setPause(state){
            state.isPlaying = false
        },
        setItemPlaying(state, action) {
            state.item = action.payload
        }

    }

})

export const songAction = songSlice.actions
export default songSlice