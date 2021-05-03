import React from 'react'
import {Wrapper} from '../styles/AppScreenStyle'
import MobileCard from './MobileCard';

export default function Screen() {
    return (
        <Wrapper>
            <div>
                <h1 className="text-center">Unsere Lösungen für dein Wohlbefinden</h1>
            </div>
            <div className="container">
                <MobileCard 
                    image="/images/Image3.png"
                    header="Individuelle Ernährungsempfehlungen für dich"
                    title="arbotena Test"
                    content="Spare dir teure wie zeitaufwendige Bluttests. In nur fünf Minuten zum Ergebnis. Auch Alternativen für deinen Speiseplan werden dir angezeigt."
                />
                <MobileCard 
                    image="/images/Image1.png"
                    header="Individuelle Ernährungsempfehlungen für dich"
                    title="arbotena Test"
                    content="Spare dir teure wie zeitaufwendige Bluttests. In nur fünf Minuten zum Ergebnis. Auch Alternativen für deinen Speiseplan werden dir angezeigt."
                />
            </div>
        </Wrapper>
    )
}
