import React, {useState} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {Wrapper} from '../styles/TopMenuStyle';
import Logo from './Logo';
import Menu from './Menu';
import Button from '../utilies/Button';

export default function TopMenu() {
    const [logoPath, setLogoPath] = useState('/images/Logo.png');

    return (
        <Wrapper>
            <Container fluid>
                <Row>
                    <Col>
                        <Logo path={logoPath}/>
                    </Col>
                    <Col md="auto">
                    <div className="tablet-hide mobile-hide">
                        <Menu />
                    </div>
                    </Col>
                    <Col xs lg="2">
                        <div className="tablet-hide mobile-hide">
                            <Button label="Registrieren"  bgColor="rgb(190, 168, 86)" textColor="#ffffff"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}
