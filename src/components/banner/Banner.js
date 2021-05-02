import React from "react";
import styled from "styled-components";
import {Row, Col} from 'react-bootstrap';

export default function Banner() {
  const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
  `;

  const Image = styled.img`
    width: 100%;
    height: 100%;
    z-index: -1;
  `;

  const Content = styled.div`
      z-index: 1;
   `;

  const imagePath = "/images/picture-hero.png";

  return (
    <Wrapper>
        <Row style={{margin: 0}}>
            <Image src={imagePath} />
            <Col md={6}>
                <Content>
                
                </Content>
            </Col>
        </Row>
    </Wrapper>
  );
}
