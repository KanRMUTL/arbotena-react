import styled from 'styled-components'
import media from '../../media';

export const Wrapper = styled.div`
    padding: 3.5%;

    .container {
        display: flex;
        justify-content: center;
    }

    ${media.tablet} {
        display:none;
    }

    ${media.smartphone} {
        display: none;
    }

`;