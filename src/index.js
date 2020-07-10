import React from "react";
import ReactDOM from "react-dom";
import App from "./common/App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/theme/globalStyles";
import theme from "./style/theme/theme";

const root = document.getElementById("root");

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  root
);
