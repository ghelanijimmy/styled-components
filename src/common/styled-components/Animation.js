import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1
	}
`;

const FadeInWrapper = styled.div.attrs((props) => ({
  delay: props.delay || "0s",
  duration: props.duration || ".3s",
}))`
  opacity: 0;
  animation: ${FadeIn} ${({ duration }) => duration} linear
    ${({ delay }) => delay} forwards;
`;
FadeInWrapper.propTypes = {
  delay: PropTypes.string,
  duration: PropTypes.string,
};

export default FadeInWrapper;
