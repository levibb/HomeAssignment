import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const beersSlice = createSlice({
    name: "beers",
    initialState: initialState,
    reducers: {
        getData: (state,action) => { 
            state.push(...action.payload)
        },
        resetData: (state) => { 
            state.length = 0
        }
    }
});

export const { getData,resetData } = beersSlice.actions;

export default beersSlice.reducer;