import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  color: black;
  font-size: 1.6rem;
  line-height: 1.5rem;
  font-weight: 600;

`;
function Text({ children }) {
  return <Title>{children}</Title>;
}

export default Text;
