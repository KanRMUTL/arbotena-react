import styled from "styled-components";
import media from "../../media"
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
    ${media.smartphone} {
      width: 100%;    
    }

    .innerContent{
      word-break: break-word;
      width: 95%;
      padding-left: 20%;
      display: flex;
      flex-direction: column;
      ${media.tablet} {
        width: 145%;
      }
      ${media.smartphone} {
        padding: 1.8%;
        width: 100%;
      }
    }
    
    .title {
      line-height: 1.3;
      font-weight: 300;
      font-size: 48px;
      max-width: 516px;
      ${media.smartphone} {
        font-size: 32px;
      }
    }

    .subtitle {
      font-size: 18px;
      line-height: 1.3;
      padding-top: 3%;
      padding-bottom: 3%;
    }
    ${media.smartphone} {
      .button-section {
        display: flex;
        flex-direction: column;
      }

      .button-section div {
        padding-top: 1.5%;
      }
    }
 `;