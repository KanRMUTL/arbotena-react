import styled from 'styled-components'

export const Wrapper = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 50;
        background: #161616a6;
        display: flex;
        justify-content: center;
        
        svg {
            position: absolute;
            top: 2%;
            right: 2%;
            color: #fff;
            cursor: pointer;
        }
        .vdo {
            margin: auto;
            width: 75%;
            height: 75%;
            position: relative; 
        }
`;