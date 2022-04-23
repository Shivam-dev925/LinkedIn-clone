import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  color: black;
  font-size: ${(props) => (props ? props.font : "1.6rem")};
  line-height: 1.5rem;
  font-weight: ${(props) => (props ? props.weight : 600)};
  margin-left: ${(props) => (props ? props.marginLeft : null)};
`;

function Text({ children, weight, font, marginLeft }) {
  return (
    <Title font={font} weight={weight} marginLeft={marginLeft}>
      {children}
    </Title>
  );
}

export default Text;
