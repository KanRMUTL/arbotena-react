import React from 'react'
import styled from 'styled-components'

export default function Button({label}) {

    const Button = styled.button`
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            background: rgb(190, 168, 86);
            color: rgb(255, 255, 255);
            height: 42px;
            padding: 0px 25px;
            white-space: nowrap;
            border: none;
    `;

    return (
        <Button>
            {label}
        </Button>
    )
}
