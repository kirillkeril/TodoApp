import styled from "styled-components";

interface FlexProps {
    direction?: string;
    justify?: string;
    alignItems?: string;
    padding?: string;
}
export const Flex = styled.div<FlexProps>`
  padding: ${props => props.padding || "0"};
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "center"};
  align-items: ${props => props.alignItems || "center"};
`;