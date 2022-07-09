import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IFilter {
    search: string;
    sortBy: "date" | "priorityUp" | "priorityDown";
    checked: boolean | undefined;
}

const initialState: IFilter = {
    search: "",
    sortBy: "date",
    checked: undefined,
}

const filterSlice = createSlice({
    name: "@@filter",
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSort: (state, action: PayloadAction<"date" | "priorityUp" | "priorityDown">) => {
            state.sortBy = action.payload;
        },
        setChecked: (state, action: PayloadAction<boolean | undefined>) => {
            state.checked = action.payload;
        }
    },
    initialState
});

export const {setSearch, setSort, setChecked} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;