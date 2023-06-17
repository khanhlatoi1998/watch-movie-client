import { configureStore } from "@reduxjs/toolkit";
import { login } from "./sliceLogin";

const rootReducer = {
    login: login
};

const store = configureStore({
    reducer: rootReducer
});

export default store;