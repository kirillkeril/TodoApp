import React, {FC} from 'react';
import {Todo} from "../types/types";
import styled from "styled-components";
import {useAppDispatch} from "../store/hooks";
import {toggleTodo} from "../store/todos/todoSlice";
import {UiChecker} from "./UI/UiChecker";
import {UiTitleH3} from "./UI/UiTitle";

interface todoItemProps {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    priority: 1 | 2 | 3 | 4;
    subTodo: Todo[];
}

const TodoItemWrapper = styled.article`
  margin: 0 auto;
  &:not(:last-child){
    margin-bottom: 0.75rem;
  }
  background: var(--colors-bg-light);
  border-radius: 0.75rem;
  box-shadow: 0 1px 10px var(--colors-accent-dark);
  display: flex;
  align-items: center;
  padding: 1rem;
  word-break: break-all;
  max-width: 768px;
`;

const TodoItemContent = styled.div`
  p{
    color: var(--colors-accent-medium);
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  .desc {
    max-width: 90%;
    word-break: break-word;
  }
`;

const TodoItem: FC<todoItemProps> = (
    {
        subTodo,
        id,
        description,
        priority,
        completed,
        title,
    }) => {
    const dispatch = useAppDispatch();

    return (
        <TodoItemWrapper>
            <UiChecker
                type={"checkbox"}
                checked={completed}
                onChange={() => dispatch(toggleTodo(id))}
                name="checked"
            />
            <TodoItemContent>
                <header>
                    <UiTitleH3>{title} (p{priority})</UiTitleH3>
                </header>
                {description && <p className="desc">{description}</p>}
            </TodoItemContent>

        </TodoItemWrapper>
    );
};

export default TodoItem;