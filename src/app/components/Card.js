import React from "react";
import styled from "styled-components";

export const OuterCard = styled.div`
  display: block;
`;

export const InnerCard = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  margin: 0 10px;
  box-shadow: 0 0 15px 2px #000;
`;

const Card = ({ children, className }) => {
  return (
    <OuterCard className={className}>
      <InnerCard>{children}</InnerCard>
    </OuterCard>
  );
};

export default Card;
