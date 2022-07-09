import React, {ReactNode} from 'react';
import styled from "styled-components";

const ModalBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #00000088;
`;
const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Modal = (props: {children: ReactNode, handleClick: (event: React.MouseEvent) => void}) => {
    return (
        <ModalBg onClick={props.handleClick}>
            <ModalWrapper onClick={event => event.stopPropagation()}>{props.children}</ModalWrapper>
        </ModalBg>
    );
};

export default Modal;