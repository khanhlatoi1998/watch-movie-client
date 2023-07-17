import { createSlice } from "@reduxjs/toolkit";
import { LoginType } from "../constants/type/inex";


const initialStateLogin: LoginType = {
    email: '',
    password: ''
}

const reducerLogin = createSlice({
    name: 'login',
    initialState: initialStateLogin,
    reducers: {
        get: (state, actiio) => {
            return state
        }
    }
});

export const login = reducerLogin.reducer;
export const { get } = reducerLogin.actions;