import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  disabled: props.disabled || false,
  size: props.size || "10px",
  type: props.type || "text",
}))`
  -webkit-appearance: none;
  border: 4px solid ${({ theme }) => theme.colors.main};
  padding: ${({ size }) => size} 20px;
  display: block;
  width: 100%;
`;
Input.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
