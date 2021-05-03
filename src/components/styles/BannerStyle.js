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

    .innerContent{
      word-break: break-word;
      width: 75%;
      padding-left: 20%;
    }
    
    .title {
      line-height: 1.3;
      font-weight: 300;
      font-size: 48px;
      max-width: 516px;
    }

    .subtitle {
      font-size: 18px;
      line-height: 1.3;
      padding-top: 3%;
      padding-bottom: 3%;
    }
 `;