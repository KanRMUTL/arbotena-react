import React from 'react'
import styled from 'styled-components'

export default function Logo({path}) {

    const Container = styled.div`
        cursor: pointer;
        margin-top: 8px;
        max-width: 250px;
        min-width: 250px;
    `;

    return (
        <Container>
            <img src={path} />
        </Container>
    )
}
