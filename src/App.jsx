import { ContainerLista } from "./components/containerLista/containerLista";
import { HeadLiner } from "./components/headLiner/headLiner";

import "./styles.css";
import { Header } from "./components/header/Header";
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
