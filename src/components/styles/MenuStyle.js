import styled from 'styled-components'

export const Wrapper = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 12px;
        cursor: pointer;
        color: #1890ff;
        
        a {
            padding: 0px 15px;
            color: #fff;
            &:hover {
                color: rgb(190, 168, 86);
            }
        }

        .border-right {
            border-right: 1px solid #ffffff;
        }
    `;