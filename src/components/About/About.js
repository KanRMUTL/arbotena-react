import React from 'react'
import {Wrapper} from '../styles/AboutStyle';
export default function About() {
    return (
        <Wrapper>
                <div>
                    <img src="/images/ellipse.png" />
                </div>
                <div className="content">
                    <p className="title">Gesundheit ganzheitlich betrachten</p>
                    <p className="subtitle">Dr. med. Hans-Joachim Petersohn</p>
                    <p>Wir haben Dr. med. Hans-Joachim Petersohn für euch interviewt. Er ist Leiter des Gesundheitsinstitus „Salutomed“ und verfolgt den Ansatz einer ganzheitlichen Therapie: Statt nur Symptome zu behandeln, möchte er die Ursachen von gesundheitlichen Beschwerden ergründen. Die Ernährung spielt hier oft eine entscheidene Rolle. Ergänzend hat Dr. med. Petersohn Vitalstoffpräparate entwickelt, die der Körper nicht immer im ausreichenden Maße über die Ernährung aufnimmt. Welche das sind, lest ihr im Interview </p>
                </div>
        </Wrapper>
    )
}
