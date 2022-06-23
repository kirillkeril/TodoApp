import React, {useState} from 'react';
import {ITodoItem} from "../../types/types";
import ListOf from "../ListOf/ListOf";
import TodoItem from "../todoItem/todoItem";

const TodosScreen = () => {
    const [todoList, setTodoList] = useState<ITodoItem[]>([
        {id: 0, title: "Todo 1", description: "dhs jklash asd", priority: 1, date: Date.now(), completed: false},
        {id: 1, title: "Todo 2", description: "dhs jklash asd", priority: 2, date: Date.now(), completed: false},
        {id: 2, title: "Todo 3", description: "dhs jklash asd", priority: 3, date: Date.now(), completed: false},
        {id: 3, title: "Todo 4", description: "dhs jklash asd", date: Date.now(), completed: false},
    ]);

    const deleteItem = (id: number) => {
        setTodoList(todoList.filter(i => i.id !== id));
    }

    return (<div className="todo-list">
        <ListOf
            items={todoList}
            renderItem={(item) =>
                <TodoItem
                    key={item.id}
                    todo={item}
                    deletePost={deleteItem}
                />
            }
        />
    </div>)
};

export default TodosScreen;