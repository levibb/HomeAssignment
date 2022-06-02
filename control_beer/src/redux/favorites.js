import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        data: ['beer','lager','like']
    },
    reducers: {
        addNewElem: (State, action) => {
            State.data = action.payload;
        },
        removeElem: (state) => {
            state.data = ['kkkkkkk'];
        },
        removeAll: (state) => {
            state.data = ['kkgggggg34535'];
        }
    }
    });

export const {addNewElem,removeElem,removeAll} = favoriteSlice.actions;

export default favoriteSlice.reducer;