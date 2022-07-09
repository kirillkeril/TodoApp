import styled, {css} from "styled-components";

interface WrapperProps {
    shadow?: boolean;
    maxWidth?: string;
    padding?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  background: transparent;
  padding: ${props => props.padding || "0"};
  
  ${props => props.shadow && css`
    box-shadow: 0 1px 10px var(--colors-accent-dark);
  `}
  
  ${props => props.maxWidth !== "none" && css<WrapperProps>`
    max-width: ${props => props.maxWidth || "none"};
    margin: 0 auto;
  `}
  
  margin-bottom: 2rem;
`;
