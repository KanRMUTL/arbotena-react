import React from 'react'
import styled from 'styled-components'

export default function Menu() {

    const Wrapper = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 12px;
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

    const Link = styled.a`
        padding: 0px 15px;
    `;  

    return (
        <Wrapper>
            {
                menu.map(item =>  <Link>{item}</Link>)
            }
        </Wrapper>
    )
}
