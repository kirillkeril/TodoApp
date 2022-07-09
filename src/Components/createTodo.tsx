import React, {FC, FormEvent, useState} from 'react';
import styled, {css} from "styled-components";
import {useAppDispatch} from "../store/hooks";

import {Todo} from "../types/types";
import {setModal} from "../store/global/globalSlice";
import {addTodo} from "../store/todos/todoSlice";
import {UiButton} from "./UI/UiButton";
import {UiArea, UiInput} from "./UI/UiInput";
import {UiSelect} from "./UI/UiSelect";
import {UiTitleH2} from "./UI/UiTitle";

interface FormProps {
    modal: boolean;
    bg? : string;
}

const FormWrapper = styled.form<FormProps>`
  background: ${props => props.bg || "var(--colors-bg-light)"};
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  
  ${props => props.modal === true && css`
    position: absolute;
    left: 0;
    bottom: 0;
    box-shadow: 0 0 10px black;
  `}
  
  h2 {
    margin-bottom: 1rem;
  }
  #priority-wrapper{
    display: flex;
    align-items: center;
  }
  #priority-label {
    color: var(--colors-accent-medium);
    font-weight: 600;
    margin-left: 1rem;
  }
  #footer {
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #footer *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

interface IOption {
    value: 1|2|3|4;
    label: string
}
const options: IOption[] = [
    {value: 1, label: "1"},
    {value: 2, label: "2"},
    {value: 3, label: "3"},
    {value: 4, label: "4"},
]

const CreateTodo:FC<FormProps> = ({modal}) => {
    const initialState: Todo = {
        title: "",
        description: "",
        completed: false,
        priority: 4,
        subTodo: [],
        id: Date.now(),
    }

    const [todo, setTodo] = useState<Todo>(initialState);
    const dispatch = useAppDispatch();
    const getPriority = () => options.find(p => p.value === todo.priority);
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (todo.title){
            dispatch(addTodo(todo));
            dispatch(setModal(false));
            setTodo(initialState);
        }
    }

    return (
        <FormWrapper modal={modal} onSubmit={handleSubmit} onReset={() => setTodo(initialState)}>
            <div id="main-wrapper">
                <UiTitleH2>Что ты хочешь сделать?</UiTitleH2>
                <UiInput
                    color="var(--color-accent-light)"
                    type="text"
                    placeholder="Заголовочек"
                    name="title"
                    value={todo.title}
                    onChange={event => {
                        setTodo({...todo, title: event.target.value});
                    }}
                />
                <UiArea
                    color="var(--color-accent-light)"
                    placeholder="Подробнее?"
                    name="description"
                    value={todo.description}
                    onChange={event => {
                        setTodo({...todo, description: event.target.value})
                    }}
                />
                <div id="priority-wrapper">
                    <UiSelect
                        color="var(--colors-accent-light)"
                        mainColor={"var(--colors-accent-light)"}
                        width="5rem"
                        menuPlacement={"auto"}
                        name="priority"
                        classNamePrefix="Select"
                        options={options}
                        value={getPriority()}
                        onChange={
                            (newItem) => {
                                setTodo({...todo, priority: (newItem as IOption).value})
                            }
                        }
                    />
                    <label id="priority-label" htmlFor="priority">Приоритет (1..4)</label>
                </div>
            </div>



            <footer id="footer">
                {modal && <UiButton
                    color="var(--colors-accent-light)"
                    onClick={() => dispatch(setModal(false))}
                >
                    Выйти
                </UiButton>}

                <UiButton color={"red"} type="reset">Сбросить</UiButton>

                <UiButton
                    border={"var(--colors-accent-medium)"}
                    color={"var(--colors-accent-dark)"}
                    type="submit"
                >
                    Добавить
                </UiButton>
            </footer>
        </FormWrapper>
    );
};

export default CreateTodo;