import styled from "styled-components";

export const Nav = styled.div`
  position: sticky;
  top: 0px;
  z-index: 999;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffffff;
`;

export const Avator = styled.div`
  width: ${({ width }) => (width ? width : "40px")};
  height: ${({ height }) => (height ? height : "40px")};
  border: 2px solid green;
  border-radius: 50%;
  background: transparent;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justify }) => justify && justify};
`;
export const Box = styled(Flex)`
  width: ${({ width }) => (width ? width : " 100%")};

  height: ${({ height }) => (height ? height : "calc(100vh - 60px)")};
  flex: ${({ flex }) => flex && flex};

  border: ${({ border }) => border && border};
  background: ${({ background }) => background && background};

  &.AppBody {
    padding: 2rem 4rem;
  }
`; 
