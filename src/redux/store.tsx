import { configureStore } from "@reduxjs/toolkit";
import { login } from "./sliceLogin";
import { userInfo } from "./sliceUserInfo";
import { button } from "./siliceButton";

const rootReducer = {
    login: login,
    userInfo: userInfo,
    button: button
};

const store = configureStore({
    reducer: rootReducer
});

export default store;