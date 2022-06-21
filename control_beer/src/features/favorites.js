import { createSlice, current } from "@reduxjs/toolkit";

const initialState = []

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {

        // this action add the chosen beer ID to the favorites state:
        addToFavorites: (state,action) => {
            state.push({
              'beerId': action.payload,
              'rank':''
            });
            console.log(action.payload,'added to favorite',current(state))

        },

        // this action finds the beer Id on the array in reverse direction and removes it
        removeFromFavorites: (state,action) => { 
            for (var i = state.length - 1; i >= 0; --i) {
                if (current(state)[i].beerId === action.payload) {
                    state.splice(i,1);
                    console.log('removed Id',action.payload,'from favorites',current(state))
                    { break; }
                }
            }
        },

        // this action initialize the favorite list state
        removeAll: (state) => {
            state.length = 0;
            console.log('removed all Favorites',current(state))
        },

        // this funtion looks for the elem Index at the array by the beer ID and update its rank value
        updateRank: (state,action) => {

            const index = state.findIndex(checkBeer);

            function checkBeer(beer) {
              return beer.beerId === action.payload.beerId;
            }

            console.log('update rank for beer Id: ',action.payload)
            console.log('the index is ',index)

            state[index].rank = action.payload.rank

            console.log(current(state))

        }
    }
});

export const { addToFavorites , removeFromFavorites , removeAll, updateRank } = favoritesSlice.actions;

export default favoritesSlice.reducer;