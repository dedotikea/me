import { configureStore } from "@reduxjs/toolkit";
import MenusSlice from "../reducers/Menus-slice";

const Store = configureStore({
    reducer: MenusSlice,
})

export default Store;