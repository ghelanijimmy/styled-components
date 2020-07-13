import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Button = styled.button`
  -webkit-appearance: none;
  border-radius: 0;
  border: none;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  margin-top: 10px;
  background-color: transparent;
`;
Button.propTypes = {
  inverse: PropTypes.bool
};
export default Button;
