import { configureStore } from "@reduxjs/toolkit";
import { login } from "./sliceLogin";
import { userInfo } from "./sliceUserInfo";

const rootReducer = {
    login: login,
    userInfo: userInfo
};

const store = configureStore({
    reducer: rootReducer
});

export default store;