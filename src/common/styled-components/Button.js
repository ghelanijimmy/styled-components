import styled from "styled-components";

const Button = styled.button`
  -webkit-appearance: none;
  border: none;
  border-radius: 0;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  margin-top: 10px;
  background-color: transparent;
`;
export default Button;
