import React from 'react';
import {Container} from '../styles/LogoStyle';
export default function Logo({path}) {

    return (
        <Container>
            <img src={path} />
        </Container>
    )
}
