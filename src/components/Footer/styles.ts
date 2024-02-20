import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1em;
  margin-top: 6em;
`;

export const StyledText = styled.p`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.fontColor};
`;

export const HeartIcon = styled(AiFillHeart)`
  margin: 0 0.3em;
  color: ${({ theme }) => theme.defaultColor};
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4em;
  width: 100%;
  max-width: 1280px;
  
  @media screen and (max-width: 1480px) {
    max-width: 1100px;
  }
`;

export const SocialMediaContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 1.4em;
  margin-bottom: 1.4em;
  transition: 0.3s;
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor};
  
  &:hover {
    color: ${({ theme }) => theme.defaultColor};
  }
`;

export const MediaText = styled.p`
  font-size: 1.4em;
  font-weight: 600;
`