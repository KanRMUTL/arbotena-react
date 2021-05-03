import React from "react";
import {Wrapper, Image, Content} from "../styles/BannerStyle";
import {Row} from "react-bootstrap";
import Button from "../utilies/Button";

export default function Banner() {

  const imagePath = "/images/picture-hero.png";
  const title = `Welche Nahrungsmittel verträgst du nicht? Wir helfen dir dabei, es rauszufinden.`;
  const subtitle = ` Erfahre hier mit dem digitalen Schnelltest, welche Lebensmittel du künftig
                     meiden solltest und mit welchen Alternativen dein Speiseplan
                     abwechslungsreich bleibt.`;

  return (
    <Wrapper>
        <Row style={{margin: 0}}>
            <div className="mobile-hide tablet-hide">
              <Image src={imagePath} />
            </div>
            <div className="desktop-hide phone-hide">
              <Image src="/images/rectangle.png" />
            </div>
                <Content>
                  <div className="innerContent">
                    <h1 className="title text-white">
                      {title}
                    </h1>
                    <p className="subtitle text-white">
                     {subtitle}
                    </p>
                    <div className="flex button-section">
                      <div>
                        <Button 
                          label="Für Quick Check registrieren" 
                          bgColor="rgb(28, 30, 33)" 
                          textColor="rgb(190, 168, 86)" 
                          isHoverAction
                        />
                      </div>
                      <div>
                        <Button 
                          label="Für Quick Check registrieren" 
                          bgColor="transparent" 
                          textColor="#ffffff" 
                          hoverColor="rgb(190, 168, 86)"
                          showPlay 
                          border />
                      </div>
                    </div>
                  </div>
                </Content>
        </Row>
    </Wrapper>
  );
}
