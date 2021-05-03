import React from 'react'
import {Wrapper} from '../styles/MobileCardStyle.js'
export default function MobileCard({header, image, title, content}) {
    return (
        <Wrapper>
            <div className="image-left">
                <img src={image} />
            </div>
            <div className="text-container">
                <h1 className="header">{header}</h1>
                <h1 className="title">{title}</h1>
                <h3 className="content">{content}</h3>
            </div>
        </Wrapper>
    )
}
