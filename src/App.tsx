import React, {useEffect} from 'react';
import styled from "styled-components";

import {useAppDispatch, useAppSelector} from "./store/hooks";
import {setIsLargeScreen, setModal, setState} from "./store/global/globalSlice";
import {getTodos} from "./store/todos/todoSlice";

import ListOf from "./Components/Common/ListOf";
import TodoItem from "./Components/todoItem";
import Modal from "./Components/Common/Modal";
import CreateTodo from "./Components/createTodo";
import {UiTitleH1, UiTitleH3} from "./Components/UI/UiTitle";
import {Wrapper} from "./Components/UI/Wrapper";
import Filter from "./Components/filter";
import {UiButton} from "./Components/UI/UiButton";
import {useFilter} from "./hooks/useFilter";
import {useSort} from "./hooks/usesort";
import {Todo} from "./types/types";


const AppWrapper = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  max-width: 1280px;
`;
const Header = styled.header`
  width: 100vw;
  cursor: pointer;
  background: var(--colors-bg-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 10px var(--colors-accent-dark);
  color: var(--colors-accent-light);
  @media(min-width: 767px){
    justify-content: center;
    >span {
      display: none;
    }
  }
`;

function App() {
    const width = window.matchMedia('(min-width: 768px)');

    const {sortBy, search, checked} = useAppSelector(state => state.filter);
    const todos = useAppSelector(state => state.todos.list);
    const visibleTodos = useSort(
        useFilter(todos, i => {
            return (i.title.toLowerCase().includes(search.toLowerCase())
                || i.description.toLowerCase().includes(search.toLowerCase())) && (checked ? i.completed : i);
        }),
        (a: Todo, b: Todo) => {
            switch (sortBy) {
                case "lessForeground":
                    if (b.priority > a.priority) {
                        return 1
                    }
                    if (b.priority < a.priority) {
                        return -1
                    } else {
                        return b.id > a.id ? 1 : -1;
                    }
                case "foreground":
                    if (a.priority > b.priority) {
                        return 1
                    }
                    if (a.priority < b.priority) {
                        return -1
                    } else {
                        return b.id > a.id ? 1 : -1;
                    }
                default: return b.id > a.id ? 1 : -1;
        }
    });


    const dispatch = useAppDispatch();

    const globalState = useAppSelector(state => state.global);

    if (width.matches) {
        dispatch(setIsLargeScreen(true));
    }else {
        dispatch(setIsLargeScreen(false));
    }

    const setIsModal = (event: React.MouseEvent) => {
      event.stopPropagation();
      event.preventDefault();
      dispatch(setModal(false));
    }

    useEffect(() => {
        width.onchange = ev => {
            if (ev.matches) {
                dispatch(setIsLargeScreen(true));
            }else {
                dispatch(setIsLargeScreen(false));
            }
        }
        if(todos.length === 0){
            dispatch(getTodos());
        }
    }, [width.matches, globalState.isLargeScreen, dispatch])
    return (
        <>
            <Header onClick={() => {
                if(!globalState.isLargeScreen){
                    dispatch(setModal(true))
                }
            }}>
                <UiTitleH1>Списочек дел</UiTitleH1>
                <span style={{wordBreak: "break-word"}}>(Нажми на меня!!)</span>
            </Header>


            {globalState.isLargeScreen &&
                <>
                <div style={{textAlign: "center"}}>
                    <UiButton color={"var(--colors-accent-light)"}
                              onClick={() => dispatch(setState("menu"))}>Добавить</UiButton>
                    или
                    <UiButton color={"var(--colors-accent-light)"}
                              onClick={() => dispatch(setState("filter"))}>отфильтровать</UiButton>
                </div>
                <Wrapper maxWidth={"768px"}>
                    {globalState.state === "menu" && <CreateTodo modal={false}/>}
                    {globalState.state === "filter" && <Filter/>}
                </Wrapper>
                </>
            }
            {!globalState.isLargeScreen && <><Filter/><br/></>}
            {(globalState.modal && !globalState.isLargeScreen) &&
                <Modal handleClick={setIsModal}>
                    <CreateTodo modal={true}/>
                </Modal>
            }

            <AppWrapper>
                {
                    visibleTodos.length > 0 ?
                    !globalState.modal && visibleTodos.length > 0 &&
                    <ListOf
                        items={visibleTodos}
                        renderItem={(todo) =>
                            <TodoItem
                                key={todo.id}
                                id={todo.id}
                                title={todo.title}
                                priority={todo.priority}
                                completed={todo.completed}
                                subTodo={todo.subTodo}
                                description={todo.description}
                            />
                        }
                    />
                    : <UiTitleH3>Задачи не найдены</UiTitleH3>
                }
        </AppWrapper>
        </>

    )
}

export default App;
