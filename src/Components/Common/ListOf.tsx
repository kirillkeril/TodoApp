import React, {ReactNode} from 'react';
import styled from "styled-components";

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
    padding?: string;
}
interface WrapperProps {
    padding?: string;
}

const Wrapper = styled.div<WrapperProps>`
  padding: ${props => props.padding};
`;

function ListOf<T>({items, renderItem, padding}: ListProps<T>){
    return(
        <Wrapper padding={padding}>
            {items.map(renderItem)}
        </Wrapper>
    )
}

export default ListOf;