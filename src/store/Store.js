import { configureStore } from "@reduxjs/toolkit";
import PlayPauseSlice from "../reducers/PlayPauseSlice";

const Store = configureStore({
    reducer: PlayPauseSlice,
})

export default Store;