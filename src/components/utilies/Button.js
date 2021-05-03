import React from 'react'
import styled from 'styled-components'

export default function Button({label, showPlay}) {

    const Button = styled.button`
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        background: rgb(190, 168, 86);
        color: rgb(255, 255, 255);
        height: 42px;
        white-space: nowrap;
        border: none;
        border-radius: 3px;
        padding: 0 20px;

        &:hover {
            height: 38px;
            padding: 0 17px;
        }
        svg{
            padding-right: 1%;
        }
       
    `;

    return (
        <Button>
            { showPlay && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="TopSection__PlayIcon-sc-17p9p6g-0 gQmOUR"><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5L16 12L10 7.5V16.5ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z" fill="white"></path></mask><g mask="url(#mask0)"><rect width="24" height="24" fill="white"></rect></g></svg>}
            {label}
        </Button>
    )
}
