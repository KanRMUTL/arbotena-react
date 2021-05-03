import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {GlobalStyle} from './globalStyle';
import TopMenu from "./components/top-menu/TopMenu";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import AppScreen from "./components/AppScreen/AppScreen"
import Service from "./components/Service/Service";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid style={{paddingLeft:0, paddingRight:0}}>
      <GlobalStyle>
        <TopMenu />
        <Banner/>
        <About/>
        <AppScreen />
        <Service 
          title="Habe ich eine Nahrungsmittelunverträglichkeit?"
          subtitle="Was kann ich dagegen tun?"
          content="Magen-Darm-Beschwerden, Kopfschmerzen, Hautprobleme? Dahinter kann die Ernährung – und eine Nahrungsmittelunverträglichkeit – stecken. Mit arbotena, dem digitalen Schnell-Test, kannst du prüfen, ob das vielleicht auch bei dir der Fall ist. Der arbotena-Test analysiert datenbasiert Symptome von Menschen und kann dadurch Rückschlüsse auf Unverträglichkeiten von Nahrungsmitteln ziehen. Das Ganze funktioniert mithilfe eines digitalen Anamnesebogens. Innerhalb von wenigen Minuten erhältst du dein persönliches Ergebnis."
          image="/images/pic-arbotena.png"
        />
      </GlobalStyle>
    </Container>
  );
}

export default App;
