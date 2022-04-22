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
  justify-content: ${({ justify }) => (justify ? justify : "center")};

  &.wrapper {
    width: ${({ width }) => width && width};
    height: ${({ height }) => height && height};
    border-radius: 0.6rem;
    background-color: white;
  }
  &.Feed__inputwrapper {
    border: 1px solid grey;
    border-radius: 1.5rem;
    flex: 0.8;
    height: 80%;
    transition: all 0.1s linear;
    > input {
      border: none;
      outline: none;
      background: transparent;
      margin-left: 1rem;
      font-weight: 600;
    }
    &:hover {
      background: #dfecf5;
      transition: all 0.1s linear;
    }
  }
`;
export const Box = styled(Flex)`
  width: ${({ width }) => (width ? width : " 100%")};

  height: ${({ height }) => (height ? height : "calc(100vh - 60px)")};
  flex: ${({ flex }) => flex && flex};
  position: ${({ position }) => position && position};
  top: ${({ top }) => top && top};
  left: ${({ left }) => left && left};
  right: ${({ right }) => right && right};
  bottom: ${({ bottom }) => bottom && bottom};
  border: ${({ border }) => border && border};
  background: ${({ background }) => background && background};
  &.Feed {
    padding: 1rem 0.4rem;
  }
  &.AppBody {
    padding: 2rem 4rem;
    overflow: hidden;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
  }
  &.Feed {
    overflow: hidden;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
