import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const hotelSlice = createSlice({
    name: 'Hotels',
    initialState: null,
    reducers: {
        setHotelG: (state, action) => action.payload
    }
})

export const { setHotelG } = hotelSlice.actions

export default hotelSlice.reducer

export const getHotelThunk = (url) => (dispacht) => {
    axios.get(url)
    .then(res => dispacht(setHotelG(res.data)))
    .catch(err => console.log(err))
}