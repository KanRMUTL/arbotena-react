import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from "./components/top-menu/TopMenu";
import Banner from './components/banner/Banner'
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid style={{paddingLeft:0, paddingRight:0}}>
      <TopMenu />
      <Banner/>
    </Container>
  );
}

export default App;
