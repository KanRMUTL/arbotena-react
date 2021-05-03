import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    box-shadow: rgb(94 89 77 / 10%) 0px 8px 20px -2px;
    border-radius: 10px;
    margin: 1%;

    .text-container {
        padding: 1.5%;
        margin: 1.5%;
    }
    .header {
        padding: 3% 2% 2% 2%;
        font-weight: 300;
        color: rgb(190, 168, 86);
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 18px;
    }

    .title {
        font-size: 24px;
        font-weight: 300;
        line-height: 28px;
    }

    .content {
        font-size: 18px;
        font-weight: 300;
        line-height: 28px;
        color: rgb(123, 123, 123);
    }
`