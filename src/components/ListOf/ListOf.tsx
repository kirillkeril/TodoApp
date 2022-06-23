import React, {FC ,ReactNode} from 'react';

interface ListOfProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
}

export default function ListOf<T>({items, renderItem}: ListOfProps<T>) {
    return (
        <>
            {items.map(renderItem)}
        </>
    )
};