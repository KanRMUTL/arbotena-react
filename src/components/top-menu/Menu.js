import React from 'react'
import {Wrapper, Link} from '../styles/MenuStyle';

export default function Menu() {
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
