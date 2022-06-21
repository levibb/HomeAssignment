import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { value: 200, message: "" }

const errorSlice = createSlice({
    name: "error",
    initialState: initialState,
    reducers: {
        setError: (state,action) => {
            state.value = action.payload.value
            state.message = action.payload.message
            }
        }
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;