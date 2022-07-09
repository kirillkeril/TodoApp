import styled, {css} from "styled-components";
interface ButtonProps {
    color: string;
    bg?: string | "transparent";
    border?: string | "none";
}

export const UiButton = styled.button<ButtonProps>`
  cursor: pointer;
  background:  ${props => props.bg || "transparent"};
  padding: 0.5rem 1rem;
  font-family: 'Comfortaa', cursive;
  border-radius: 0.3rem;
  color: ${props => props.color};
  border: ${props => props.border ? "2px solid " + props.border : "none"};
  &:active{
    font-weight: 800;
    transform: translateY(-1px);
    ${props => props.border && css<ButtonProps>`
      background: ${props.border};
    `}
  }
`;