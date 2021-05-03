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

    .text-center {
        text-align: center;
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

    .hover-white {
        background-color: #ffffff;
        color: rgb(190, 168, 86);
    }

    .desktop-hide {
        ${media.desktop} {
            display: none;
        }
    }

    .tablet-hide {
        ${media.tablet} {
            display: none;
        }
    }

    .mobile-hide {
        ${media.smartphone} {
            display: none;
        }
    }

`;