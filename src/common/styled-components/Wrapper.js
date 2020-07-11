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

const Wrapper = ({ children, className }) => (
  <MainOuterWrapper className={className}>
    <MainInnerWrapper>{children}</MainInnerWrapper>
  </MainOuterWrapper>
);
export default Wrapper;
