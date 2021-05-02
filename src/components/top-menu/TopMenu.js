import React, {useState} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';
import Button from '../utilies/Button';

export default function TopMenu() {
    const Wrapper = styled.div`
        margin: auto;
        padding-top: 30px;
        padding-left: 3.5vw;
        padding-right: 6.01vw;
        display: flex;
        justify-content: space-between;
    `;

    const [logoPath, setLogoPath] = useState('/images/logo.png');

    return (
        <Wrapper>
            <Container fluid>
                <Row>
                    <Col>
                        <Logo path={logoPath}/>
                    </Col>
                    <Col md="auto">
                        <Menu />
                    </Col>
                    <Col xs lg="2">
                        <Button label="Registrieren"/>
                </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}
