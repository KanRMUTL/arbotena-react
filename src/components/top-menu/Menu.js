import React from "react"
import {Wrapper} from "../styles/MenuStyle";

export default function Menu() {
    const menu = [
        {label: "Start"},
        {label: "Über arbotena"},
        {label: "Shop"},
        {label: "Blog"},
        {label: "Video"},
        {label: "FAQs", className: "border-right"},
        {label: "Einloggen"}
    ]

    return (
        <Wrapper>
            {
                menu.map((item, key) =>  <a href="#" key={key} className={item.className}>{item.label}</a>)
            }
        </Wrapper>
    )
}
