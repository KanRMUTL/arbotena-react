import React from "react";
import {Wrapper, Image, Content} from './styles/BannerStyle';
import {Row} from 'react-bootstrap';

export default function Banner() {

  const imagePath = "/images/picture-hero.png";

  return (
    <Wrapper>
        <Row style={{margin: 0}}>
            <Image src={imagePath} />
                <Content>
                  <div>
                    <h1 class="title">
                      Welche Nahrungsmittel verträgst du nicht? Wir helfen dir dabei, es
                      rauszufinden.
                    </h1>
                    <h2 class="subtitle">
                      Erfahre hier mit dem digitalen Schnelltest, welche Lebensmittel du künftig
                      meiden solltest und mit welchen Alternativen dein Speiseplan
                      abwechslungsreich bleibt.
                    </h2>
                  </div>
                </Content>
        </Row>
    </Wrapper>
  );
}
