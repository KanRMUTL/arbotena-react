import React from 'react'
import {Wrapper} from '../styles/ServiceStyle';

export default function Service({title,subtitle, content, image}) {
    return (
        <Wrapper>
            <div className="text-container">
                <h1 className="title">
                    {title}
                </h1>
                <h1 className="subtitle">
                    {subtitle}
                </h1>
                <p className="content">
                    {content}
                </p>
            </div>
            <div>
                <img src={image} />
            </div>
        </Wrapper>
    )
}
