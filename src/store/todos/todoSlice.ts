import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Todo, TodoState} from "../../types/types";

const initialState: TodoState = {
    list: [
        // {
        //     id: 1,
        //     title: "Задача 1",
        //     completed: false,
        //     priority: 1,
        //     description: "AAAAAAAAAAAAAAAAffffffffffffffffffffffffffffffffffA",
        //     subTodo: [
        //         {id: 2, title: "Todo 2", completed: false, priority: 2, subTodo: [], description: ''},
        //     ]
        // },
        // {
        //     id: 3,
        //     title: "Todo 3",
        //     completed: false,
        //     priority: 1,
        //     description: "AAAAAAAAAAAAAAAAA",
        //     subTodo: []
        // },
        // {id: 4, title: "Todo 4", completed: false, priority: 2, subTodo: [], description: ''},
        // {
        //     id: 5,
        //     title: "Todo 5",
        //     completed: false,
        //     priority: 1,
        //     description: "AAAAAAAAAAAAAAAAA",
        //     subTodo: [
        //         {id: 6, title: "Todo 6", completed: false, priority: 2, subTodo: [], description: ''},
        //     ]
        // },
    ],
};

const todoSlice = createSlice({
    name: "@@todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.list.push(action.payload);
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const toggledTodo = state.list.find(todo => todo.id === action.payload);
            if(toggledTodo) {
                toggledTodo.completed = !toggledTodo.completed;
            }
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        },
        getTodos: (state, action: PayloadAction) => {

        }
    },
});

export const {removeTodo, toggleTodo, addTodo, getTodos} = todoSlice.actions
export const todosReducer = todoSlice.reducer;