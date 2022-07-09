import {configureStore} from "@reduxjs/toolkit";
import {todosReducer} from "./todos/todoSlice";
import {globalReducer} from "./global/globalSlice";
import {filterReducer} from "./filter/filterSlice";

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        global: globalReducer,
        filter: filterReducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;