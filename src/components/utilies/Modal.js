import React from 'react'
// import {Wrapper} from '../styles/ModalStyle'
import styled from 'styled-components'

export default function Modal({openModal}) {

    const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 50;
    background: #161616a6;
    display: flex;
    justify-content: center;
    ${openModal ? '' : 'display: none;' }

    svg {
        position: absolute;
        top: 2%;
        right: 2%;
        color: #fff;
        cursor: pointer;
        ${openModal ? '' : 'display: none;' }
    }
    .vdo {
        margin: auto;
        width: 75%;
        height: 75%;
        position: relative; 
        ${openModal ? '' : 'display: none;' }
    }
`;

    let [isOpen, setIsOpen] = React.useState(openModal)
    return (
        <Wrapper openModal={isOpen}>
            <svg onClick={() => {setIsOpen(!isOpen); console.log('isOpen', isOpen)}} viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
            <div className="vdo">
            <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/EvUfoK3qjKw?autoplay=1&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Farbotena.de&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=7" id="widget8"></iframe>
            </div>
        </Wrapper>
    )
}
