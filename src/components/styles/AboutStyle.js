import styled from 'styled-components';
import media from '../../media.js';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 3% 3%;
    background-color: rgb(246, 246, 246);
    ${media.tablet} {
      display: none;  
    }
    ${media.smartphone} {
      display: none;  
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10%;
    }

    .title {
        font-size: 40px;
        font-weight: 300;
        line-height: 1;
    }

    .subtitle {
        font-size: 32px;
        font-weight: 300;
    }
`