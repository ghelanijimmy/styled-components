import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html {
		height: 100%;
	}
	
	* {
		padding: 0;
		margin: 0;
		font-family: "Open Sans", sans-serif;
		box-sizing: border-box;
	}
`;

export default GlobalStyle;
