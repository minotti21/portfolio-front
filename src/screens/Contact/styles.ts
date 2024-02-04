import rgbUtils from "@/utils/rgbUtils";
import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-size: 3em;
`;

export const ContactContainer = styled.div`
  display: flex;
  padding: 4em 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.p`
  font-size: 1.5em;
  font-weight: 400;
  text-align: center;
  margin: 1em 0;
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 16px;
  padding: 0 20px;
  margin-bottom: 1em;
  height: 70px;
  background-color: ${({ theme }) =>
    theme.backgroundColor == "rgb(14, 14, 14)"
      ? rgbUtils.lightenRGBColor(theme.backgroundColor, 30)
      : rgbUtils.darkenRGBColor(theme.backgroundColor, 10)};
  color: ${({ theme }) => theme.fontColor};
  align-items: center;
  font-weight: bold;
  caret-color: ${({ theme }) => theme.defaultColor};
  font-size: 1.6em;
  outline: none;
  border: none;
  transition: 0.3s;

  &:focus {
    -webkit-box-shadow: ${({ theme }) =>
      `0px 0px 3px 0px ${theme.defaultColor}`};
    -moz-box-shadow: ${({ theme }) => `0px 0px 3px 0px ${theme.defaultColor}`};
    box-shadow: ${({ theme }) => `0px 0px 3px 0px ${theme.defaultColor}`};
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 16px;
  padding: 20px;
  height: 200px;
  background-color: ${({ theme }) =>
    theme.backgroundColor == "rgb(14, 14, 14)"
      ? rgbUtils.lightenRGBColor(theme.backgroundColor, 30)
      : rgbUtils.darkenRGBColor(theme.backgroundColor, 10)};
  color: ${({ theme }) => theme.fontColor};
  font-weight: bold;
  caret-color: ${({ theme }) => theme.defaultColor};
  font-size: 1.4em;
  font-family: inherit;
  outline: none;
  border: none;
  resize: none;
  margin-bottom: 0.6em;
  transition: 0.3s;

  &:focus {
    -webkit-box-shadow: ${({ theme }) =>
      `0px 0px 3px 0px ${theme.defaultColor}`};
    -moz-box-shadow: ${({ theme }) => `0px 0px 3px 0px ${theme.defaultColor}`};
    box-shadow: ${({ theme }) => `0px 0px 3px 0px ${theme.defaultColor}`};
  }
`;

export const StyledLabel = styled.label`
  font-size: 1.6em;
  font-weight: 600;
  margin-bottom: 0.4em;
  margin-left: 0.2em;
  display: inline-block;
`;
