import React, {useEffect, useState} from 'react';
import {Wrapper} from "./UI/Wrapper";
import {UiSelect} from "./UI/UiSelect";
import {UiInput} from "./UI/UiInput";
import {UiButton} from "./UI/UiButton";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {setChecked, setSearch, setSort} from "../store/filter/filterSlice";
import {Flex} from "./UI/Flex";

interface ISortOption {
    value: "date" | "foreground" | "lessForeground";
    label: string;
}
const optionsSort: ISortOption[] = [
    {value: "date", label: "Сначала новые"},
    {value: "foreground", label: "Сначала важные"},
    {value: "lessForeground", label: "Сначала менее важные"},
]

interface ICheckOption {
    value: boolean | undefined,
    label: string,
}
const optionsCheck: ICheckOption[] = [
    {value: true, label: "Выполненные"},
    {value: false, label: "Невыполненные"},
    {value: undefined, label: "Статус..."},
]

interface FilterInterface{
    search: string;
    sortBy: "date" | "foreground" | "lessForeground";
    checked: boolean | undefined;
}
const initialState: FilterInterface = {
    search: "",
    sortBy: "foreground",
    checked: undefined,
}

const Filter = () => {
    const [filter, setFilter] = useState(initialState);
    const dispatch = useAppDispatch();
    const isLargeScreen = useAppSelector(state => state.global.isLargeScreen);

    useEffect(() => {
        dispatch(setSearch(filter.search));
        dispatch(setSort(filter.sortBy));
        dispatch(setChecked(filter.checked));
    }, [filter, dispatch]);

    const getSort = () => optionsSort.find(p => p.value === filter.sortBy);
    const getCheck = () => optionsCheck.find(p => p.value === filter.checked);

    return (
        <Wrapper
            padding={!isLargeScreen ? "0 1rem" : "0"}
        >
            <UiInput
                placeholder="Найти..."
                color="var(--color-accent-light)"
                value={filter.search}
                onChange={event => {
                    setFilter({...filter, search: event.target.value})}
                }
            />
            <Flex
                direction={isLargeScreen ? "row" : "column"}
                justify={isLargeScreen ? "space-between" : "center"}
                alignItems={"center"}
            >
                <UiSelect
                    value={getSort()}
                    width={isLargeScreen ? "49%": "100%"}
                    margin={!isLargeScreen ? "0 0 0.5rem 0" : "0"}
                    color={"var(--colors-accent-light)"}
                    mainColor={"var(--colors-accent-light)"}
                    classNamePrefix="Select"
                    options={optionsSort}
                    placeholder={"Сортировать по: "}
                    onChange={newItem => {
                        setFilter({...filter, sortBy: (newItem as ISortOption).value})
                    }}
                />
                <UiSelect
                    value={getCheck()}
                    width={isLargeScreen ? "50%": "100%"}
                    margin={!isLargeScreen ? "0 0 0.5rem 0" : ""}
                    color={"var(--colors-accent-light)"}
                    mainColor={"var(--colors-accent-light)"}
                    classNamePrefix="Select"
                    options={optionsCheck}
                    placeholder={"Статус"}
                    onChange={newItem => {
                        setFilter({...filter, checked: (newItem as ICheckOption).value})
                    }}
                />
            </Flex>


            <UiButton color="var(--colors-accent-light)" onClick={() => setFilter(initialState)}>Сбросить фильтры</UiButton>
        </Wrapper>
    );
};

export default Filter;