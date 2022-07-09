import styled from "styled-components";

interface UiInputProps {
    bg?: string;
    color: string;
}

export const UiInput = styled.input<UiInputProps>`
  border-radius: 0.5rem;
  width: 100%;
  font-size: 1.5rem;
  padding: 0.75rem 0.5rem;
  background: ${props => props.bg || "transparent"};
  color: ${props => props.color};
  border: 1px solid var(--colors-accent-dark);
  outline: none;
  margin-bottom: 0.5rem;
  &:focus{
    border: 2px solid var(--colors-accent-dark);
  }
`;

export const UiArea = styled.textarea<UiInputProps>`
  border-radius: 0.5rem;
  width: 100%;
  font-size: 1.5rem;
  padding: 0.75rem 0.5rem;
  resize: none;
  background: ${props => props.bg || "transparent"};
  color: ${props => props.color};
  border: 1px solid var(--colors-accent-dark);
  outline: none;
  margin-bottom: 0.5rem;
  &:focus{
    border: 2px solid var(--colors-accent-dark);
  }
`;