import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface GlobalState {
    modal: boolean;
    isLargeScreen: boolean;
    state: "menu" | "filter";
}

const initialState: GlobalState = {
    modal: false,
    isLargeScreen: false,
    state: "menu",
};

const globalSlice = createSlice({
    name: '@@global',
    initialState,
    reducers: {
        setModal: (state, action: PayloadAction<boolean>) => {
            state.modal = action.payload;
        },
        setIsLargeScreen: (state, action: PayloadAction<boolean>) => {
            state.isLargeScreen = action.payload;
        },
        setState: (state, action: PayloadAction<"menu" | "filter">) => {
            state.state = action.payload;
        }
    }
});

export const {setModal, setIsLargeScreen, setState} = globalSlice.actions
export const globalReducer = globalSlice.reducer;