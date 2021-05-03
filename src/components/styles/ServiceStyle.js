import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 5% 10%;

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