import { configureStore } from "@reduxjs/toolkit";
import PlayButtonSlice from "../reducers/PlayButtonSlice";

const Store = configureStore({
    reducer: PlayButtonSlice,
})

export default Store;