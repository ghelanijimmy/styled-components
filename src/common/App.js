import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Main from "./styled-components/Wrapper";
import Card, { InnerCard } from "../app/components/Card";

const CustomCard = styled(Card)``;

const CardsWrapper = styled.section`
  width: 100%;
  display: ${({ maxCol }) => (maxCol && "flex") || "block"};
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 25px;
  flex-wrap: ${({ maxCol }) => (maxCol && "wrap") || "nowrap"};

  ${CustomCard} {
    flex: 1 1 ${({ maxCol }) => (maxCol && `${100 / maxCol}%`) || "auto"};
    ${({ maxCol }) =>
      maxCol &&
      css`
        margin: 25px 0;
      `}

    p {
      font-size: ${({ noCardShadow }) => (noCardShadow && "initial") || "12px"};
    }

    ${InnerCard} {
      box-shadow: 0 10px 0 2px ${({ theme }) => theme.colors.black};
    }
  }

  ${InnerCard} {
    ${({ noCardShadow }) => {
      return (
        noCardShadow &&
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

CardsWrapper.propTypes = {
  noCardShadow: PropTypes.bool,
  maxCol: PropTypes.number,
};

//TODO attributes

const App = () => {
  return (
    <Main>
      <CardsWrapper>
        <Card>
          <h1>Our App</h1>
        </Card>
      </CardsWrapper>
      <CardsWrapper maxCol={5}>
        <CustomCard>
          <h2>Card Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aliquid amet, aut eius error et, facilis, id nam quas
            quo recusandae reprehenderit saepe sequi similique voluptate.
            Accusantium enim error et illum inventore labore laboriosam
            necessitatibus nesciunt placeat, possimus quas rem.
          </p>
          <button>CTA</button>
        </CustomCard>
        <CustomCard>
          <h2>Card Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aliquid amet, aut eius error et, facilis, id nam quas
            quo recusandae reprehenderit saepe sequi similique voluptate.
            Accusantium enim error et illum inventore labore laboriosam
            necessitatibus nesciunt placeat, possimus quas rem.
          </p>
          <button>CTA</button>
        </CustomCard>
        <CustomCard>
          <h2>Card Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aliquid amet, aut eius error et, facilis, id nam quas
            quo recusandae reprehenderit saepe sequi similique voluptate.
            Accusantium enim error et illum inventore labore laboriosam
            necessitatibus nesciunt placeat, possimus quas rem.
          </p>
          <button>CTA</button>
        </CustomCard>
        <CustomCard>
          <h2>Card Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aliquid amet, aut eius error et, facilis, id nam quas
            quo recusandae reprehenderit saepe sequi similique voluptate.
            Accusantium enim error et illum inventore labore laboriosam
            necessitatibus nesciunt placeat, possimus quas rem.
          </p>
          <button>CTA</button>
        </CustomCard>
        <CustomCard>
          <h2>Card Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aliquid amet, aut eius error et, facilis, id nam quas
            quo recusandae reprehenderit saepe sequi similique voluptate.
            Accusantium enim error et illum inventore labore laboriosam
            necessitatibus nesciunt placeat, possimus quas rem.
          </p>
          <button>CTA</button>
        </CustomCard>
      </CardsWrapper>
      <CardsWrapper noCardShadow>
        <Card>
          <h2>Section Header</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusantium ad, animi asperiores autem consequuntur corporis culpa
            debitis dolorem dolorum eaque eligendi et eum ex facere labore
            laboriosam minima minus, nam nemo nulla quae quo repellendus
            repudiandae saepe tenetur veniam. Aliquam atque consequatur
            doloremque facilis magnam nam quas, totam voluptas! Accusamus
            consectetur excepturi illo iure laborum possimus quibusdam quo.
            Vero?
          </p>
        </Card>
      </CardsWrapper>
    </Main>
  );
};

export default App;
