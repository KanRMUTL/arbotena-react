import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from "./components/top-menu/TopMenu";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <TopMenu />
    </Container>
  );
}

export default App;
