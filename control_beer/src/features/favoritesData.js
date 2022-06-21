import { createSlice  } from "@reduxjs/toolkit";

const initialState = []

const favoriteDataSlice = createSlice({
    name: "favoriteData",
    initialState: initialState,
    reducers: {
        getFavoriteData: (state,action) => {
            state.length = 0
            state.push(...action.payload)
            }
        }
});

export const { getFavoriteData } = favoriteDataSlice.actions;

export default favoriteDataSlice.reducer;