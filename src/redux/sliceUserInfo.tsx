import { createSlice } from "@reduxjs/toolkit";
import { UserInfoType } from "../constants/type/inex";


const getUserInfo: any = localStorage.getItem('userInfo');
const parseUserInfo = JSON.parse(getUserInfo);


const initialState: UserInfoType | object | null = parseUserInfo;

const reducerUserInfo = createSlice({
    name: 'userInfo',
    initialState: initialState,
    reducers: {
        get: (state, action) => {
            return state;
        },
        saveUserInfo: (state, action) => {
            return state = action?.payload;
        },
        removeUserInfo: (state, action) => {
            localStorage.removeItem('userInfo');
            return null;
        },
    }
});

export const userInfo = reducerUserInfo.reducer;
export const { get, saveUserInfo, removeUserInfo } = reducerUserInfo.actions;

