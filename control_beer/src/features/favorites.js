import { createSlice, current } from "@reduxjs/toolkit";

// const initialStateValue = []

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        addToFavorites: (state,action) => {
            state.push({
              'beerId': action.payload
            });
            console.log(action.payload,'added to favorite',current(state))

        },
        removeFromFavorites: (state,action) => { 
            state.value = action.payload;
        },
        removeAll: (state,action) => {
            state.value = action.payload;
        },
        updateRank: (state,action) => {
            state.value = action.payload;
        }
    }
});

export const { addToFavorites , removeFromFavorites , updateRank } = favoritesSlice.actions;

export default favoritesSlice.reducer;