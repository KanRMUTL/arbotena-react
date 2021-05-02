import React from 'react'
import styled from 'styled-components'

export default function Menu() {

    const Wrapper = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 12px;
        cursor: pointer;
        color: #1890ff;
       
    `;

    const Link = styled.a`
        padding: 0px 15px;
        color: #fff;
        &:hover {
            text-decoration: none;
            outline: none;
            cursor: pointer;
            color: rgb(190, 168, 86);
        }
    `; 

    const menu = [
        'Start',
        'Über arbotena',
        'Shop',
        'Blog',
        'Video',
        'FAQs',
        'Einloggen'
    ]

    return (
        <Wrapper>
            {
                menu.map((item, key) =>  <Link key={key}>{item}</Link>)
            }
        </Wrapper>
    )
}
