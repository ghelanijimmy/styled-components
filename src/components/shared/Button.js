import styled from "styled-components";

const Button = styled.button`
  appearance: none;
  background-color: ${(props) => props.theme.regalBlue};
  color: white;
  padding: 0.25em 0.5em;
  margin: 0.5em 0;
  box-sizing: border-box;
  transition: background-color 0.25s, color 0.25s;

  ${(props) => {
    switch (props.size) {
      case "sm":
        return "font-size: 12px;";
      case "lg":
        return "font-size: 20px;";
      default:
        return "font-size: 16px;";
    }
  }}

  ${(props) => {
    switch (props.display) {
      case "block":
        return "display: block; width: 100%;";
      default:
        return "display: initial;";
    }
  }}

  &:hover {
    background-color: white;
    color: ${(props) => props.theme.regalBlue};
    cursor: pointer;
  }
`;

export default Button;
