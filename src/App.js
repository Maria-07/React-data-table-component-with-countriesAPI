import { Container } from "react-bootstrap";
import "./App.css";
import CountriesTable from "./Pages/CountriesTable";

function App() {
  return (
    <>
      <Container>
        <div className="d-flex flex-column align-items-center">
          <h1>React Database</h1>
        </div>
        <CountriesTable></CountriesTable>
      </Container>
    </>
  );
}

export default App;
