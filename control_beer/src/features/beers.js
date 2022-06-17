import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = []

const beersSlice = createSlice({
    name: "beers",
    initialState: { value: initialStateValue},
    reducers: {
        getData: (state,action) => { 
            state.value = action.payload;
        }
    }
});

export const { getData } = beersSlice.actions;

export default beersSlice.reducer;