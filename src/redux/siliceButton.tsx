import { createSlice } from "@reduxjs/toolkit";


const initialStateLogin = false;
const reducerButton = createSlice({
    name: 'loader',
    initialState: initialStateLogin,
    reducers: {
        handler: (state, action) => {
            return state = action?.payload
        }
    }
});

export const button = reducerButton.reducer;
export const { handler } = reducerButton.actions;