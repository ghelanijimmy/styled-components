import React from "react";
import Card from "../components/Card";
import Wrapper from "../../common/styled-components/Wrapper";
import {
  CardsWrapper,
  CustomInnerWrapper,
  FlexCard
} from "./MainStyledComponents";
import Input from "../../common/styled-components/input";
import FadeInWrapper from "../../common/styled-components/Animation";
import Button from "../../common/styled-components/Button";

const Main = () => {
  return (
    <Wrapper>
      <FadeInWrapper delay=".5s" duration=".75s">
        <CardsWrapper>
          <Card>
            <h1>Section One</h1>
          </Card>
        </CardsWrapper>
        <CardsWrapper maxCol={5}>
          <FlexCard>
            <h2>Card Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium aliquid amet, aut eius error et, facilis, id nam quas
              quo recusandae reprehenderit saepe sequi similique voluptate.
              Accusantium enim error et illum inventore labore laboriosam
              necessitatibus nesciunt placeat, possimus quas rem.
            </p>
            <Button inverse={true}>CTA</Button>
          </FlexCard>
          <FlexCard>
            <h2>Card Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium aliquid amet, aut eius error et, facilis, id nam quas
              quo recusandae reprehenderit saepe sequi similique voluptate.
              Accusantium enim error et illum inventore labore laboriosam
              necessitatibus nesciunt placeat, possimus quas rem.
            </p>
            <Button>CTA</Button>
          </FlexCard>
          <FlexCard>
            <h2>Card Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium aliquid amet, aut eius error et, facilis, id nam quas
              quo recusandae reprehenderit saepe sequi similique voluptate.
              Accusantium enim error et illum inventore labore laboriosam
              necessitatibus nesciunt placeat, possimus quas rem.
            </p>
            <Button>CTA</Button>
          </FlexCard>
          <FlexCard>
            <h2>Card Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium aliquid amet, aut eius error et, facilis, id nam quas
              quo recusandae reprehenderit saepe sequi similique voluptate.
              Accusantium enim error et illum inventore labore laboriosam
              necessitatibus nesciunt placeat, possimus quas rem.
            </p>
            <Button>CTA</Button>
          </FlexCard>
          <FlexCard>
            <h2>Card Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium aliquid amet, aut eius error et, facilis, id nam quas
              quo recusandae reprehenderit saepe sequi similique voluptate.
              Accusantium enim error et illum inventore labore laboriosam
              necessitatibus nesciunt placeat, possimus quas rem.
            </p>
            <Button>CTA</Button>
          </FlexCard>
        </CardsWrapper>
        <CardsWrapper simple>
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
      </FadeInWrapper>
      <FadeInWrapper delay="1s" duration="1s">
        <CustomInnerWrapper>
          <CardsWrapper>
            <Card>
              <h1>Section Two</h1>
            </Card>
          </CardsWrapper>
          <CardsWrapper maxCol={3}>
            <FlexCard>
              <h3>Static Prop Attribute</h3>
              <h4>Type</h4>
              <p>
                Changes input type based on passed prop or defaults to password
              </p>
              <Input placeholder="Input" type="password" />
              <Button>CTA</Button>
            </FlexCard>
            <FlexCard>
              <h3>Static Prop Attribute:</h3>
              <h4>Disabled</h4>
              <p>
                Disables input field based on passed prop or defaults to false
              </p>
              <Input placeholder="Input" disabled />
              <Button>CTA</Button>
            </FlexCard>
            <FlexCard>
              <h3>Dynamic Prop Attribute</h3>
              <h4>Size</h4>
              <p>
                Changes padding top and bottom based on passed prop or defaults
                to 10px
              </p>
              <Input placeholder="Input" size="40px" />
              <Button>CTA</Button>
            </FlexCard>
          </CardsWrapper>
        </CustomInnerWrapper>
      </FadeInWrapper>
    </Wrapper>
  );
};

export default Main;
