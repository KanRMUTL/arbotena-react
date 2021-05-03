import styled from 'styled-components'
import media from './media';

export const GlobalStyle = styled.div`
    a:hover {
            text-decoration: none;
            outline: none;
            cursor: pointer;
    }

    .text-white{
        color: #ffffff;
    }

    .myText {
        color: #efef00;
        ${media.desktop} {
            color: #000;
        }
        ${media.tablet} {
            color: #3e44ee;
        }
        ${media.smartphone} {
            color: #a0e;
        }
    }

    .flex { 
        display: flex;
    }

    .flex-col {
        display: flex;
        flex-direction: column;
    }

    .sp-between {
        justify-content: space-between;
    }


`;