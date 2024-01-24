import styled from "styled-components";

export const StyledCanvas = styled.canvas`
  background-color: #fff;
  outline: ${({ theme }) => `2px solid ${theme.fontColor}`};
  border-radius: 4px;
  position: relative;
  display: block;
`;

export const StyledSideBar = styled.div`
  height: 200px;
  width: 80px;
  background-color: #999;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100000;
  border-bottom-right-radius: 4px;
`
export const StyledScore = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 1em;
  font-weight: bold;
  z-index: 3;
`
