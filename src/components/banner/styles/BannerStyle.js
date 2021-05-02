import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Content = styled.div`
    z-index: 10;
    height: 100%;
    width: 50%;
    margin: 0 auto;
    position: absolute;
    display: flex;
    align-items: center;
 `;