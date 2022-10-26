import { createSlice } from "@reduxjs/toolkit";

const PlayButtonSlice = createSlice({
    name: 'PlayButton',
    initialState: 1,
    reducers: {
        play(state, action){

        },
        pause(state, action){

        },
    }
})

export default PlayButtonSlice.reducer