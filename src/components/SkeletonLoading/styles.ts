import styled, { keyframes } from "styled-components";

export const SkeletonLoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LoadingTextContainer = styled.div``;

export const SkeletonNavbar = styled.div`
  height: 10vh;
  width: 1280px;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SkeletonNavItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

const shine = keyframes`
    to {
      background-position-x: -200%;
    }
`;

export const SkeletonDiv = styled.div<{
  $height: string;
  $width: string;
  $mb?: string;
  $mt?: string;
}>`
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  margin-top: ${({ $mt }) => $mt};
  margin-bottom: ${({ $mb }) => $mb};
  background: #eee;
  border-radius: 8px;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  animation: 1.4s ${shine} linear infinite;
`;
