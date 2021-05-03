import styled from 'styled-components';
import media from '../../media.js';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 5% 10%;
    ${media.tablet} {
      display: none;  
    }
    ${media.smartphone} {
      display: none;  
    }

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 7%;
        margin-right: 5%;
    }

    .title {
        font-weight: 300;
        font-size: 48px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 32px;
    }

    .content {
        font-size: 18px;
        font-weight: 300;
        line-height: 28px;
    }
`;