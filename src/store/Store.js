import { configureStore } from "@reduxjs/toolkit";
import MenusSlice from "../reducers/Menus";

const Store = configureStore({
    reducer: MenusSlice,
})

export default Store;