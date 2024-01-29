import { ContainerLista } from "./components/containerLista/containerLista";
import { HeadLiner } from "./components/headLiner/headLiner";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Header } from "./components/header/header";
import { BenefitsList } from "./components/benefits/benefits";

function App() {
  return (
    <div className="containerLista">
      <header className="header">
        <Header />
      </header>
      <HeadLiner />
      <ContainerLista />
      <BenefitsList />
    </div>
  );
}

export default App;
