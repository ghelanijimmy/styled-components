import React from "react";
import styled from "styled-components";
import Button from "../components/shared/Button";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  color: white;
`;

const MainContent = styled.div`
  background-color: ${(props) => props.theme.regalBlue};
  flex: 1;
  padding: 10px;
`;

const Sidebar = styled.div`
  background-color: ${(props) => props.theme.dimGray};
  flex: 0 auto;
  width: 200px;
  padding: 10px;
`;

const Article = () => {
  return (
    <div>
      <Wrapper>
        <MainContent>
          <p>Main Content</p>{" "}
          <p>
            <Button size={"sm"}>Hello</Button>
            <Button>Hello</Button>
            <Button size={"lg"} display={"block"}>
              Hello
            </Button>
          </p>
        </MainContent>
        <Sidebar>Sidebar</Sidebar>
      </Wrapper>
    </div>
  );
};

export default Article;
