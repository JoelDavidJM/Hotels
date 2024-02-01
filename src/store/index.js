import { configureStore } from "@reduxjs/toolkit";
import hotels from './states/hotel.pages'

export default configureStore({
    reducer: {
        hotels
    }
})