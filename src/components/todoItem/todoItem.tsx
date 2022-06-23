import React, {FC} from 'react';
import './todo-item.css';
import {ITodoItem} from "../../types/types";

export interface TodoItemProps {
    todo: ITodoItem;
    deletePost: Function;
}

const TodoItem : FC<TodoItemProps> = (
    {todo, deletePost}) => {
    return (
        <div className="todo-wrapper">
            <header className="todo-title">
                {todo.title}
                {todo.priority ? <span className={`todo-priority todo-priority_${todo.priority}`}>p{todo.priority}</span> : ''}
            </header>
            <div className="todo-body">
                {todo.description && <p className="todo-description">{todo.description}</p>}
                <button
                    className="todo-delete"
                    onClick={event => deletePost(todo.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoItem;