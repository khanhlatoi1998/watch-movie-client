import { createSlice } from "@reduxjs/toolkit";

const initialStateError = {
    message: ''
}

const reducerErrors = createSlice({
    name: 'errors',
    initialState: initialStateError,
    reducers: {
        showErrors: (state, action) => {
            return state;
        }
    }
})

export const errors = reducerErrors.reducer;
export const showErrors = reducerErrors.actions;