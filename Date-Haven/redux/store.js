import {configureStore} from "@reduxjs/toolkit";
import { dates_api } from "./api";

export default configureStore({
    reducer: {
        [dates_api.reducerPath]: dates_api.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(dates_api.middleware),
});