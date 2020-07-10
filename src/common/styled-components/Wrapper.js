import styled from "styled-components";

export const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  height: 100vh;
  padding: 20px;
  display: block;
  background-color: ${({ theme }) => theme.colors.main};
`;
