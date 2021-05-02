import React from 'react'
import styled from 'styled-components';

export default function Link({url, label}) {
    const Link = styled.a`
      font-family: Roboto, system-ui;
      font-size: 18px;
      font-weight: 300;
      line-height: 28px;
      color: rgb(255, 255, 255);
      cursor: pointer;
      padding: 0px 15px;
      white-space: nowrap;

      text-decoration: none;
      background-color: transparent;
      outline: none;
      transition: color .3s;
    `;
    return (
        <div>
          <Link>
            <a href={url}>{label}</a>
          </Link>
        </div>
    )
}
