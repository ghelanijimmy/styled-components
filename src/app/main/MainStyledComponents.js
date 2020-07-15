import styled, { css } from "styled-components";
import Card, { InnerCard } from "../components/Card";
import PropTypes from "prop-types";
import Wrapper from "../../common/styled-components/Wrapper";
import Button from "../../common/styled-components/Button";

export const FlexCard = styled(Card)``;

export const CardsWrapper = styled.section`
  width: 100%;
  display: ${({ maxCol }) => (maxCol && "flex") || "block"};
  margin: 0 0 25px;

  &:not(:first-of-type) {
    margin-top: 50px;
  }

  ${({ maxCol }) =>
    maxCol &&
    css`
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: ${({ maxCol }) => (maxCol && "wrap") || "nowrap"};
    `}

  ${FlexCard} {
    ${({ maxCol }) =>
      maxCol &&
      css`
        margin: 25px 0;
        flex: 1 1 ${({ maxCol }) => (maxCol && `${100 / maxCol}%`) || "auto"};
        transition: 0.125s linear all;

        p {
          font-size: ${({ noCardShadow }) =>
            (noCardShadow && "initial") || "12px"};
          transition: 0.125s linear all;
        }

        ${InnerCard} {
          box-shadow: 0 10px 0 2px ${({ theme }) => theme.colors.black};
        }

        &:hover {
          ${InnerCard} {
            background-color: ${({ theme }) => theme.colors.main};
            transition: 0.125s linear all;

            p {
              color: white;
            }

            h2 {
              color: ${({ theme }) => theme.colors.lighter};
            }

            ${Button} {
              background-color: ${({ theme }) => theme.colors.lighter};
              color: ${({ theme }) => theme.colors.main};
            }
          }
        }
      `}
    ${Button} {
      background-color: ${({ theme }) => theme.colors.main};
      color: ${({ theme }) => theme.colors.lighter};
      width: 100%;
      display: block;
    }
  }

  ${InnerCard} {
    ${({ simple }) => {
      return (
        simple &&
        css`
          background-color: transparent;
          color: ${({ theme }) => theme.colors.lighter};
          box-shadow: none;
          padding: 0;
        `
      );
    }}
  }
`;

export const CustomWrapper = styled(Wrapper)`
  & > div {
    padding: 0;
  }
  height: auto;
  min-height: 0;

  h3 {
    color: white;
    margin-bottom: 10px;
    font-weight: 100;
  }

  h4 {
    color: white;
    margin-bottom: 10px;
  }

  p {
    color: ${({ theme }) => theme.colors.lighter};
    font-weight: bold;
    margin-bottom: 10px;
  }

  ${FlexCard} {
    ${InnerCard} {
      background-color: ${({ theme }) => theme.colors.dark};
      box-shadow: 0 10px 0 2px ${({ theme }) => theme.colors.light};
    }
    ${Button} {
      background: ${({ theme }) => theme.colors.lighter};
      color: initial;
      border: none;
      width: initial;
    }

    &:hover {
      ${InnerCard} {
        background-color: ${({ theme }) => theme.colors.lighter};
        box-shadow: 0 10px 0 2px ${({ theme }) => theme.colors.dark};
        transition: 0.125s linear all;

        p,
        h2,
        h3,
        h4 {
          color: initial;
          transition: 0.125s linear all;
        }
        ${Button} {
          background-color: ${({ theme }) => theme.colors.dark};
          color: ${({ theme }) => theme.colors.lighter};
        }
      }
    }
  }
`;

CardsWrapper.propTypes = {
  simple: PropTypes.bool,
  maxCol: PropTypes.number
};
