
import { createSlice } from "@reduxjs/toolkit";

const initialState = {value:''}

const searchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        changeValue: (state,action) => { 
            state.value = action.payload
        },
        resetValue: (state) => { 
            state.value = ''
        }
    }
});

export const { changeValue,resetValue } = searchSlice.actions;

export default searchSlice.reducer;