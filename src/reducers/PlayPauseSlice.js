import { createSlice } from "@reduxjs/toolkit";

const PlayPauseSlice = createSlice({
    name: 'PlayPause',
    initialState: 1,
    reducers: {
        play(state, action){

        },
        pause(state, action){

        },
    }
})

export default PlayPauseSlice.reducer