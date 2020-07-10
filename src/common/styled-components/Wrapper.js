import React from "react";
import styled from "styled-components";

export const MainInnerWrapper = styled.div`
  margin: auto;
  max-width: 90%;
  padding: 60px 0;
`;

const MainOuterWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: block;
  background-color: ${({ theme }) => theme.colors.main};
`;

const Main = ({ children }) => (
  <MainOuterWrapper>
    <MainInnerWrapper>{children}</MainInnerWrapper>
  </MainOuterWrapper>
);
export default Main;
