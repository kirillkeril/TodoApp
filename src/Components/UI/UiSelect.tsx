import styled from "styled-components";
import ReactSelect from "react-select";

interface SelectProps {
    mainColor: string;
    color: string;
    mainBg?: string
    bg?: string;
    width?: string;
    margin?: string;
}

export const UiSelect = styled(ReactSelect)<SelectProps>`
  width: ${props => props.width || "100%"};
  margin: ${props => props.margin || "0"};
  .Select__control {
    color: ${props => props.mainColor};
    background: ${props => props.mainBg ||"transparent"};
    border: 1px solid var(--colors-accent-dark);
    border-radius: 0.5rem;
    cursor: pointer;
  } 
  .Select__indicator-separator {
      display: none;
    }
  .Select__control--is-focused {
    box-shadow: 0 0 2px var(--colors-accent-medium);
    outline: var(--colors-accent-medium);
  }
  .Select__menu {
    width: ${props => props.width || "100%"};
    border-radius: 0.4rem;
    background: white;
    color: var(--colors-accent-dark);
  }
`;